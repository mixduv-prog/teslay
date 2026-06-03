<?php
/**
 * API live (PHP) — fonctionne sur l'hébergement Web mutualisé Hostinger.
 * GET api/vehicles.php?q=&brand=&chemistry=&segment=&status=&priceMin=&priceMax=&rangeMin=&only800V=true
 * Les paramètres multi-valeurs acceptent la syntaxe CSV : ?brand=Tesla,BMW
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$dataPath = __DIR__ . '/../vehicles.json';
if (!is_readable($dataPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'vehicles.json introuvable']);
    exit;
}

$data = json_decode(file_get_contents($dataPath), true);
$vehicles = $data['vehicles'] ?? [];

/** Récupère un paramètre multi-valeurs (répété ou CSV). */
function listParam(string $key): array {
    if (!isset($_GET[$key])) return [];
    $raw = is_array($_GET[$key]) ? $_GET[$key] : [$_GET[$key]];
    $out = [];
    foreach ($raw as $v) {
        foreach (explode(',', $v) as $part) {
            $part = trim($part);
            if ($part !== '') $out[] = $part;
        }
    }
    return $out;
}

$q         = isset($_GET['q']) ? mb_strtolower(trim($_GET['q'])) : '';
$brands    = listParam('brand');
$chems     = listParam('chemistry');
$segments  = listParam('segment');
$statuses  = listParam('status');
$priceMin  = isset($_GET['priceMin']) && $_GET['priceMin'] !== '' ? (float) $_GET['priceMin'] : null;
$priceMax  = isset($_GET['priceMax']) && $_GET['priceMax'] !== '' ? (float) $_GET['priceMax'] : null;
$rangeMin  = isset($_GET['rangeMin']) && $_GET['rangeMin'] !== '' ? (float) $_GET['rangeMin'] : null;
$trunkMin  = isset($_GET['trunkMin']) && $_GET['trunkMin'] !== '' ? (float) $_GET['trunkMin'] : null;
$only800V  = isset($_GET['only800V']) && $_GET['only800V'] === 'true';

$results = array_values(array_filter($vehicles, function ($v) use (
    $q, $brands, $chems, $segments, $statuses, $priceMin, $priceMax, $rangeMin, $trunkMin, $only800V
) {
    if ($q !== '') {
        $hay = mb_strtolower(($v['brand'] ?? '') . ' ' . ($v['model'] ?? '') . ' ' . ($v['version'] ?? ''));
        if (mb_strpos($hay, $q) === false) return false;
    }
    if ($brands   && !in_array($v['brand'] ?? '', $brands, true))     return false;
    if ($chems    && !in_array($v['chemistry'] ?? '', $chems, true))  return false;
    if ($segments && !in_array($v['segment'] ?? '', $segments, true)) return false;
    if ($statuses && !in_array($v['status'] ?? '', $statuses, true))  return false;
    if ($only800V && empty($v['is800V']))                             return false;

    $price = $v['priceFromEur'] ?? null;
    if ($priceMin !== null && ($price === null || $price < $priceMin)) return false;
    if ($priceMax !== null && ($price === null || $price > $priceMax)) return false;
    if ($rangeMin !== null && ($v['rangeWltpKm'] ?? 0) < $rangeMin)    return false;
    if ($trunkMin !== null && ($v['trunkL'] ?? 0) < $trunkMin)         return false;

    return true;
}));

echo json_encode([
    'count'       => count($results),
    'total'       => count($vehicles),
    'collectedAt' => $data['collectedAt'] ?? null,
    'results'     => $results,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

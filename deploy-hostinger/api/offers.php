<?php
/**
 * API live (PHP) — offres pour un véhicule.
 * GET api/offers.php?vehicleId=tesla-model-3
 *
 * ⚠️ Offres ILLUSTRATIVES dérivées du prix catalogue (pas de scan live).
 * Pour un vrai agrégateur : alimentez vehicles.json (ou une table) via une
 * tâche CRON Hostinger qui interroge des flux/API partenaires, puis lisez-les
 * ici. Respectez robots.txt / CGU / RGPD des sources.
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$vehicleId = isset($_GET['vehicleId']) ? trim($_GET['vehicleId']) : '';
if ($vehicleId === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Paramètre vehicleId requis']);
    exit;
}

$data = json_decode(file_get_contents(__DIR__ . '/../vehicles.json'), true);
$vehicle = null;
foreach ($data['vehicles'] ?? [] as $v) {
    if (($v['id'] ?? '') === $vehicleId) { $vehicle = $v; break; }
}
if (!$vehicle) {
    http_response_code(404);
    echo json_encode(['error' => 'Véhicule introuvable']);
    exit;
}

function buildOffers($price): array {
    if ($price === null) {
        return [[
            'source' => 'exemple', 'type' => 'Achat',
            'label' => 'Prix catalogue non disponible',
            'note' => "Prix de départ non confirmé — voir le site officiel.",
            'isExample' => true,
        ]];
    }
    $bonus = 4000;
    $loa = round(($price * 0.011) / 10) * 10;
    $lld = round(($price * 0.009) / 10) * 10;
    return [
        ['source' => 'exemple', 'type' => 'Achat', 'label' => 'Achat comptant (catalogue)',
         'priceEur' => $price, 'note' => 'Prix de départ constructeur, bonus non déduit.', 'isExample' => true],
        ['source' => 'exemple', 'type' => 'Achat', 'label' => 'Achat avec bonus écologique (estimé)',
         'priceEur' => max($price - $bonus, 0), 'note' => "Estimation avec {$bonus} € de bonus — éligibilité à vérifier.", 'isExample' => true],
        ['source' => 'exemple', 'type' => 'LOA', 'label' => "Location avec option d'achat (estimée)",
         'monthlyEur' => $loa, 'durationMonths' => 37, 'note' => 'Mensualité illustrative, hors apport.', 'isExample' => true],
        ['source' => 'exemple', 'type' => 'LLD', 'label' => 'Location longue durée (estimée)',
         'monthlyEur' => $lld, 'durationMonths' => 48, 'note' => 'Mensualité illustrative, varie selon le kilométrage.', 'isExample' => true],
    ];
}

echo json_encode([
    'vehicleId'  => $vehicleId,
    'model'      => ($vehicle['brand'] ?? '') . ' ' . ($vehicle['model'] ?? ''),
    'disclaimer' => "Offres ILLUSTRATIVES (prix catalogue) — pas de scan live.",
    'offers'     => buildOffers($vehicle['priceFromEur'] ?? null),
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

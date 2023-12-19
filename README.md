# Mein erstes API

## Allgemeine Infrastruktur
![](./images/Infrastructure.png)

## API Dokumentation
`GET /allitems`: Gibt Alle Elemente der Shopping Liste zurück

`GET /itembyid/{itemdId}`: Gibt ein einzelnes Elemnt zurück.
**Parameter**: `itemId` - Einzigartige Id des Elements

 `POST /newitem:` 
Erstellt ein neues Element in der Einkaufsliste.

`DELETE /deleteitem/{itemId}:` 
Entfernt ein objekt aus der Einkaufsliste anhand seiner eindeutigen Id.

`PUT /updateitem/{itemId}:` 
Aktualisierung zu einem vorhandenen Produkt in der Einkaufsliste.
**Parameter**: `itemId` - Eindeutige Id des zu aktualisierenden Elements.
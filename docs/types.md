# Type
```json
{
  "name":"type-name:text",
  "properties": "property[]"
}
```

# property
```json
{
  "name":"property-name:text",
  "label": "Property Name:text",
  "type": "property-type:type",
  "description": "property-description:text",
  "minCount":"default 0",
  "maxCount":"default 1",
  "value":"value"
}
```

# type instance (value of a type)

```json
{
  "type": "type-name:text",
  "value":"Value[]"
}
```

# Property ID

`type-name.property-name`

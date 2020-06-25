module.exports = {
    "metadata": {
        "id": "mergeProfileByEmail",
        "name": "merge profile by email",
        "description": "merge profile"
    },
    "raiseEventOnlyOnceForSession": false,
    "condition": {
        "parameterValues": {
            "eventTypeId": "mergeProfileByEmail"
        },
        "type": "eventTypeCondition"
    },
    "actions": [{
            "parameterValues": {
                "mergeProfilePropertyValue": "eventProperty::target.properties(Email)",
                "mergeProfilePropertyName": "mergeIdentifier"
            },
            "type": "mergeProfilesOnPropertyAction"
        },
        {
            "parameterValues": {},
            "type": "allEventToProfilePropertiesAction"
        }
    ]
}
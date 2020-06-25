module.exports = {
    "metadata": {
        "id": "mergeProfile",
        "name": "merge profile",
        "description": "merge profile"
    },
    "raiseEventOnlyOnceForSession": false,
    "condition": {
        "parameterValues": {
            "eventTypeId": "mergeProfile"
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
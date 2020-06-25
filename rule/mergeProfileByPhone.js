module.exports = {
    "metadata": {
        "id": "mergeProfileByPhone",
        "name": "merge profile by phone",
        "description": "merge profile"
    },
    "raiseEventOnlyOnceForSession": false,
    "condition": {
        "parameterValues": {
            "eventTypeId": "mergeProfileByPhone"
        },
        "type": "eventTypeCondition"
    },
    "actions": [{
            "parameterValues": {
                "mergeProfilePropertyValue": "eventProperty::target.properties(Phone)",
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
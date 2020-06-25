module.exports = {
    "metadata": {
        "id": "setProfile",
        "name": "set profile",
        "description": "set profile"
    },
    "raiseEventOnlyOnceForSession": false,
    "condition": {
        "type": "eventTypeCondition",
        "parameterValues": {
            "eventTypeId": "setProfile"
        }
    },
    "actions": [
        {
            "type": "setPropertyAction",
            "parameterValues": {
                "setPropertyName": "properties(Name)",
                "setPropertyValue": "eventProperty::properties(Name)",
                "setPropertyStrategy": "alwaysSet"
            }
        },
        {
            "type": "setPropertyAction",
            "parameterValues": {
                "setPropertyName": "properties(Email)",
                "setPropertyValue": "eventProperty::properties(Email)",
                "setPropertyStrategy": "alwaysSet"
            }
        }
    ]
}
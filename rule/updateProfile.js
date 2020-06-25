module.exports = {
    "metadata": {
        "id": "updateProfile",
        "name": "update profile",
        "description": "update profile"
    },
    "raiseEventOnlyOnceForSession": false,
    "condition": {
        "parameterValues": {
            "eventTypeId": "updateProfile"
        },
        "type": "eventTypeCondition"
    },
    "actions": [{
        "parameterValues": {},
        "type": "updatePropertiesAction"
    }]
}
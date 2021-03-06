var Defines = {
    propsMap: {
        'дист': 'dist',
        'ур': 'level',
        'ож': 'hp',
        'ом': 'mp',
        'од': 'moves',
        'яр': 'fury'
    },
    states: {
        NONE: 'State.NONE',
        DEFAULT: 'State.DEFAULT',
        ITEMS_ON_THE_GROUND: 'State.ITEMS_ON_THE_GROUND',
        SELECT_ENEMY: 'State.SELECT_ENEMY',
        COMBAT: 'State.COMBAT',
        DEATH: 'State.DEATH'
    },
    stepResults: {
        OK: 'StepResult.OK',
        NO_ACTION: 'StepResult.NO_ACTION',
        STOP: 'StepResult.STOP'
    }
}
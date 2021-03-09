import * as Actions from './moves'

describe('selectCell', () => {
  it('should create an action to select a cell', () => {
    const expectedAction = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0
    }
    const result = Actions.selectCell('X', 0, 0)
    expect(result).toEqual(expectedAction)
  })
})

describe('setWinner', () => {
  it('should create an action to set the Winner', () => {
    const expectedAction = {
      type: Actions.SET_WINNER,
      winner: 'X'
    }
    const result = Actions.setWinner('X')
    expect(result).toEqual(expectedAction)
  })
})

describe('noWinner', () => {
  it('should create an action to set the Win situation', () => {
    const expectedAction = {
      type: Actions.NO_WINNER,
    }
    const result = Actions.noWinner()
    expect(result).toEqual(expectedAction)
  })
})

import { storeFactory } from '../test/testUtils';
import { guessWord, resetGame } from './store/actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{ guessedWord: unsuccessfulGuess, letterMatchCount: 3 }],
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for correct guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = { secretWord, guessedWords };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for correct guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});

describe('`resetGame` action creator', () => {
  describe('user has not guessed word', () => {
    const initialState = {
      success: false,
      secretWord: 'party',
      guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
    };
    const store = storeFactory(initialState);
    test('does not reset the game', async () => {
      await store.dispatch(resetGame());
      const newState = store.getState();
      expect(newState).toEqual(initialState);
    });
  });
  describe('user has correctly guessed the word', () => {
    let store;
    beforeEach(() => {
      const initialState = {
        success: true,
        secretWord: 'party',
        guessedWords: [
          { guessedWord: 'train', letterMatchCount: 3 },
          { guessedWord: 'party', letterMatchCount: 5 },
        ],
      };
      store = storeFactory(initialState);
    });

    test('resets `success` to false', async () => {
      await store.dispatch(resetGame());
      const { success } = store.getState();
      expect(success).toBe(false);
    });

    test('resets `guessedWords` to empty array', async () => {
      await store.dispatch(resetGame());
      const { guessedWords } = store.getState();
      expect(guessedWords.length).toBe(0);
    });
  });
});

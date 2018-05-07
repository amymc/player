import getPlaylist from './getPlaylist.js';

describe('test get playlist', () => {
  beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: '123',
          json: function() {
            return {
              data: [
                { uri: '/videos/245869128' },
                { uri: '/videos/246107487' },
              ],
            };
          },
        });
      });

      return p;
    });
  });

  it('gets video data', async () => {
    getPlaylist('documentary').then(response => {
      expect(response[0].id).toBe('245869128');
    });
  });
});

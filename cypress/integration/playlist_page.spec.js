describe('load new video', function() {
  it('Loads new video on click', function() {
    cy.visit('/');

    let itemVideoId;

    cy
      .get('[data-test-id="ListItem"]')
      .eq(2)
      .click()
      .then($item => {
        itemVideoId = $item[0].dataset.videoId;
      });

    cy.get('[data-test-id="Player"]').then($player => {
      expect($player[0].dataset.videoId).to.equal(itemVideoId);
    });
  });

  it('Scrolls selected video to top on click', function() {
    cy.visit('/');

    cy
      .get('[data-test-id="ListItem"]')
      .eq(2)
      .click()
      .then($item => {
        let itemOffsetTop = $item.position().top;
        //Ideally we would check $item.offsetTop === $item.offsetParent.scrollTop
        expect($item.position().top).to.be.below(5);
      });
  });
});

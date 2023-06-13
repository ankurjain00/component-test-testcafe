import { Selector } from 'testcafe';

fixture('App Component')
  .page('http://localhost:3000');

test('button changes color on click', async (t) => {
  const button = Selector('#colorChange');
  const initialColor = await button.getStyleProperty('background-color');

  await t.click(button);

  const updatedColor = await button.getStyleProperty('background-color');
  await t.expect(updatedColor).notEql(initialColor);
});

test('button is disabled on checkbox click', async (t) => {
  const button = Selector('#colorChange');
  const checkbox = Selector('#disabled-button-checkbox');

  await t.click(checkbox);

  await t.expect(button.hasAttribute('disabled')).ok();
});

test('button color is gray when disabled', async (t) => {
  const button = Selector('#colorChange');
  const checkbox = Selector('#disabled-button-checkbox');

  await t.click(checkbox);
  await t.expect(button.getStyleProperty('background-color')).eql('rgb(128, 128, 128)');
});

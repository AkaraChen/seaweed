import { Badge } from '../badge';
import { render } from 'shared/test';

test('render', async () => {
    render('sw-badge', Badge);
});

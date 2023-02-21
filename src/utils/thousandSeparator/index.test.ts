import 'react-native';

import {thousandSeparator} from '.'

it('isThousandSeparator works well', () => {
   expect(thousandSeparator(10000)).toBe("10.000");
   expect(thousandSeparator(null)).toBe("0");
   expect(thousandSeparator(24)).toBe('24');
 });
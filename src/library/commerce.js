import Commerce from '@chec/commerce.js';

// Creating a new instance of Commerce
export const commerce = new Commerce(process.env.REACT_APP_JOHNNY_STORE_CHEC_PUBLIC_KEY, true);
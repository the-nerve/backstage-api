// Working with the Snipcart API
// TODO: Build request validator
// https://docs.snipcart.com/v3/webhooks/introduction
// X-Snipcart-RequestToken
// https://app.snipcart.com/api/requestvalidation/{token}


import fetch from 'isomorphic-unfetch';

/**
 *
 * @param {*} token
 */
export const isValidRequest = requestToken => {

    const validationURL = `https://app.snipcart.com/api/requestvalidation/${requestToken}`;

    await fetch( validationURL ).then( result => result.json() ).then( data => data );

}
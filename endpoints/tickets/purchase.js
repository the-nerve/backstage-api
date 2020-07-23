'use strict';

import  {isValidRequest} from '../../src/services/snipcart';
import {dbConnect} from '../../src/services/database';

/**
 * Orchestrate ticket purchase actions
 *
 * -- send transactional email (with template)
 * -- register user with Mailchimp or something similar
 * -- add user to spreadsheet??
 * -- set up timed email delivery for the day before performance?
 * -- submit eCommerce data to Google Analytics & Mailchimp
 */

// sendEmail( data, template, from )

module.exports.purchase = async (event, context) => {

    // Validate request
   await isValidRequest(event.requestToken)

   // Save to mongo db
    const db = await dbConnext();


   return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            },
            null,
            2
        ),
    };
}
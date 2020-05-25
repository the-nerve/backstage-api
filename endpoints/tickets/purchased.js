'use strict';

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

module.exports.purchased = async (event, context) => {
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
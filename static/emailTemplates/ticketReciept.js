import mjml2html from 'mjml'
import { config } from '__config';

/**
 * Compile an mjml string
 */
export const html = mjml2html(`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            Hello World!
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`, config)
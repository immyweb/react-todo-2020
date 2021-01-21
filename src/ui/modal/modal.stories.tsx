import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Modal } from './modal';
import { H2, P } from '../typography/typography';

const ModalContent = () => {
  return (
    <div className="modal-content">
      <H2>SNOW IN THE DESERT</H2>
      <P>Explain why the person is in this spot as it is obviously words placed distion.</P>
      <img src="http://via.placeholder.com/580x250" alt="" />
      <P>
        Kirk Pasich, a lawyer for the family, said: “Without the results of toxicology tests, we do
        not know what was going on with Chris—or if any to his demise.
      </P>
      <P>
        “The family believes that if Chris took his life, he did not know what he was doing, and
        that drugs or other was doing, that drugs or other substances may have affected his
        actions.”
      </P>
      <P>
        “Without the results of toxicology tests, we do not know what was going on with Chris—or if
        any substances contributed to his demise.
      </P>
      <P>
        Kirk Pasich, a lawyer for the family, said: “Without the results of toxicology tests, we do
        not know what was going on with Chris—or if any to his demise.
      </P>
    </div>
  );
};

storiesOf('Modal', module).add('Modal', () => (
  <Modal content={<ModalContent />} standalone={true} active={false} />
));

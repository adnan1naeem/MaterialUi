import * as React from 'react';
import  BR  from '@blueeast/bluerain-os';
import ChipUi from 'material-ui/Chip';
import { FormattedMessage } from 'react-intl';
import { IChip } from '@blueeast/bluerain-ui-interfaces/Components/Chip';

/**
 * The props of Logo Component
 * @param {string} props.altText The Alter text of the Logo Component
 * @param {string} props.src The source of the Logo image in Logo Component
 * @param {string} props.linkTag The flag of the link whether link is enabled or disabled
 * @param {string} props.to The Url of the desired page in Logo Component
 */
const Chip = (iChip: IChip) => {
    return (
        <ChipUi {iChip.style}>{iChip.children}</ChipUi>);

};

export default Chip;
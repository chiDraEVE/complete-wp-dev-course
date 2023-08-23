import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps, RichText, InspectorControls
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n'
import icons from '../../icons.js'
import './main.css'
import {PanelBody, ToggleControl} from "@wordpress/components";

registerBlockType('udemy-plus/page-header', {
    icon: icons.primary,
    edit({attributes, setAttributes}) {
        const { content, showCategory } = attributes
        const blockProps = useBlockProps()

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('General', 'udemy-plus')}>
                        <ToggleControl
                            label={__('Show Category', 'udemy-plus')}
                            checked={showCategory}
                            onChange={showCategory => setAttributes({ showCategory })}
                        />
                    </PanelBody>
                </InspectorControls>
                <div { ...blockProps }>
                    <div class="inner-page-header">
                        <RichText
                            tagName="h1"
                            placeholder={ __('Heading', 'udemy-plus')}
                            value={ content }
                            onChange={ content => setAttributes({ content })}
                        />
                    </div>
                </div>
            </>
        );
    }
});
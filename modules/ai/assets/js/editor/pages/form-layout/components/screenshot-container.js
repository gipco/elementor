import { Box, styled } from '@elementor/ui';

const ScreenshotContainer = styled( Box, {
	shouldForwardProp: ( prop ) => prop !== 'outlineOffset',
} )( ( { theme, selected, height, disabled, outlineOffset = '0px' } ) => {
	const outlineColor = selected ? theme.palette.text.primary : theme.palette.text.disabled;
	const outline = `${ theme.border.size.sm } ${ theme.border.style.solid } ${ outlineColor }`;

	return {
		height,
		cursor: disabled ? 'default' : 'pointer',
		overflow: 'hidden',
		boxSizing: 'border-box',
		backgroundPosition: 'top center',
		backgroundSize: '100% auto',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.common.white,
		borderRadius: theme.border.size.md,
		outlineOffset,
		outline,
		opacity: disabled ? '0.4' : '1',
		transition: `all 50ms linear`,
		'&:hover': disabled ? {} : {
			outlineColor: theme.palette.text.primary,
		},
	};
} );

export default ScreenshotContainer;

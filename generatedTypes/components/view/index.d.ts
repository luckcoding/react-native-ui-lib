import React from 'react';
import { ViewProps } from 'react-native';
import { BaseComponentInjectedProps, ForwardRefInjectedProps } from '../../commons/new';
import { ContainerModifiers } from '../../../typings/modifiers';
interface ViewPropTypes extends ViewProps {
    /**
     * If true, will render as SafeAreaView
     */
    useSafeArea?: boolean;
    /**
     * Use Animate.View as a container
     */
    animated?: boolean;
    /**
     * Turn off accessibility for this view and its nested children
     */
    inaccessible?: boolean;
}
declare type PropsTypes = BaseComponentInjectedProps & ViewPropTypes & ForwardRefInjectedProps & ContainerModifiers;
declare const _default: React.ComponentType<Pick<Pick<PropsTypes, "br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100" | "padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV" | "margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV" | "flex" | "flexG" | "flexS" | "row" | "center" | "left" | "right" | "centerH" | "spread" | "top" | "bottom" | "centerV" | "style" | "testID" | "modifiers" | "animated" | "onLayout" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "useSafeArea" | "inaccessible" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture">, "br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100" | "padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV" | "margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV" | "flex" | "flexG" | "flexS" | "row" | "center" | "left" | "right" | "centerH" | "spread" | "top" | "bottom" | "centerV" | "style" | "testID" | "animated" | "onLayout" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityStates" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "useSafeArea" | "inaccessible" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture">>;
export default _default;

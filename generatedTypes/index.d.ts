/**
 * This is a fake index.ts file, for auto-generating the types of all the inline required components.
 * The real index file that will be bundled is "src/index.js".
 * Please use this file for declaring all the exports, so they could be picked up by typescript's complier
 */
export * from './style';
export {default as View} from './components/view';
export {default as Text} from './components/text';
export {default as TouchableOpacity} from './components/touchableOpacity';
export {default as Button} from './components/button';
export {default as Checkbox} from './components/checkbox';
export {default as Image} from './components/image';
export {default as Overlay} from './components/overlay';
export {default as RadioButton} from './components/radioButton/RadioButton';
export {default as RadioGroup} from './components/radioButton/RadioGroup';

/* All components with manual typings */
export {
  ActionBar,
  ActionSheet,
  Avatar,
  Badge,
  Card,
  Carousel,
  ConnectionStatusBar,
  Dialog,
  Drawer,
  FloatingButton,
  FeatureHighlight,
  Hint,
  BaseInput,
  TextArea,
  MaskedInput,
  ListItem,
  PageControl,
  PanningProvider,
  PanGestureView,
  PanListenerView,
  PanDismissibleView,
  PanResponderView,
  ProgressBar,
  Slider,
  GradientSlider,
  ColorSliderGroup,
  Stepper,
  TabBar,
  TagsInput,
  SharedTransition,
  StackAggregator,
  Toast,
  WheelPickerDialog,
  Assets,
  BaseComponent,
  PureBaseComponent,
  UIComponent,
  forwardRef,
  AvatarHelper,
  Constants,
  LogService,
  LoaderScreen,
  Modal,
  StateScreen,
  WheelPicker,
  Incubator,
  ColorPicker
} from '../typings';

/* All components that are missing either manual or auto generated typings */
export const AnimatedImage;
export const AnimatedScanner;
export const ColorPalette;
export const ColorSwatch;
export const DateTimePicker;
export const HighlighterOverlayView;
export const Keyboard;
export const KeyboardAwareListView;
export const KeyboardAwareScrollView;
export const Picker;
export const SafeAreaInsetsManager;
export const SafeAreaSpacerView;
export const ScrollBar;
export const SelectableComponent;
export const Switch;
export const TabController;
export const TextField;
export const Wizard;

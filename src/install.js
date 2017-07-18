import breadcrumbInstaller from './components/breadcrumb';
import buttonInstaller from './components/button';
import calloutInstaller from './components/callout';
import checkboxInstaller from './components/checkbox';
import choiceFieldGroupInstaller from './components/choice_field_group';
import labelInstaller from './components/label';
import linkInstaller from './components/link';
import spinnerInstaller from './components/spinner';
import tableInstaller from './components/table';
import textFieldInstaller from './components/text_field';
import toggleInstaller from './components/toggle';

export default function (Vue) {
  breadcrumbInstaller(Vue);
  buttonInstaller(Vue);
  calloutInstaller(Vue);
  checkboxInstaller(Vue);
  choiceFieldGroupInstaller(Vue);
  labelInstaller(Vue);
  linkInstaller(Vue);
  spinnerInstaller(Vue);
  tableInstaller(Vue);
  textFieldInstaller(Vue);
  toggleInstaller(Vue);
}

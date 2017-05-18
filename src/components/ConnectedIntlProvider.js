import {connect} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';
import de from 'react-intl/locale-data/de';

addLocaleData([...de]);

function mapStateToProps(state) {
	const {lang, messages} = state.locales;
	return {locale: lang, key:lang, messages};
}

export default connect(mapStateToProps)(IntlProvider);
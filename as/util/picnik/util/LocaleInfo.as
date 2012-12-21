// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package picnik.util
{
	import picnik.core.Env;
	
	public class LocaleInfo
	{
		private static var _aobNonGooglePlusLocales:Array = [];
		private static var _aobGooglePlusLocales:Array = [];
		
		public function LocaleInfo()
		{
		}
		
		public static function get locale(): String {
			return Env.inst.locale;
		}

		public static function SmallFontSize(nFontSize:Number): Number {
			if (SafeGetCurrentLocaleInfo().nonBold)
				nFontSize = Math.max(12, nFontSize);

			return nFontSize;
		}
		
		public static function IsEnglish(): Boolean {
			return LocaleInfo.locale == "en_US";
		}

		private static function SafeGetCurrentLocaleInfo(): Object {
			return SafeGetLocaleInfo(LocaleInfo.locale);
		}
		
		private static function SafeGetLocaleInfo(strLocale:String): Object {
			var obEnglish:Object = null;
			for each (var obLocale:Object in _aobAllLocales)
				if (obLocale.locale == strLocale)
					return obLocale;
				if (obLocale.locale == 'en_US')
					obEnglish = obLocale;
			if (obEnglish != null) {
				trace("Locale not found. Using English");
				return obEnglish;
			}
			throw new Error("Locale not found: " + strLocale);
			return null;
		}

		// BEGIN:AUTO_GENERATED:LocaleInfo
		// This is generated by bin/loc/updateLocales.py using server/LocaleInfo.py as the source
		// To modify locale information, edit server/LocaleInfo.py
		// To modify the code produced, edit bin/loc/updateLocales.py
		static private var _aobAllLocales:Array = [
			{locale: 'id_ID', countries: ['id'], flag: 'id', googleCode: 'id', label: 'Bahasa Indonesia', nonBold: false, useSystemFont: false},
			{locale: 'zh_CN', countries: ['cn'], flag: 'cn', googleCode: 'zh-CN', label: '﻿简体中文', nonBold: true, useSystemFont: true},
			{locale: 'zh_HK', countries: ['hk', 'tw'], flag: 'hk', googleCode: 'zh-TW', label: '繁體中文', nonBold: true, useSystemFont: true},
			{locale: 'de_DE', countries: ['at', 'de'], flag: 'de', googleCode: 'de', label: 'Deutsch', nonBold: false, useSystemFont: false},
			{locale: 'en_US', countries: ['au', 'ca', 'gb', 'ie', 'nz', 'us'], flag: 'us', googleCode: 'en-US', label: 'English', nonBold: false, useSystemFont: false},
			{locale: 'en_GB', countries: [], flag: 'gb', googleCode: 'en-GB', googlePlus: true, label: 'English', nonBold: false, useSystemFont: false},
			{locale: 'es_ES', countries: ['es', 'mx', 'pr'], flag: 'es', googleCode: 'es', label: 'Español', nonBold: false, useSystemFont: false},
			{locale: 'fl_PH', countries: [], flag: 'ph', googleCode: 'fil', googlePlus: true, label: 'Filipino', nonBold: false, useSystemFont: false},
			{locale: 'fr_FR', countries: ['fr'], flag: 'fr', googleCode: 'fr', label: 'Français', nonBold: false, useSystemFont: false},
			{locale: 'it_IT', countries: ['it'], flag: 'it', googleCode: 'it', label: 'Italiano', nonBold: false, useSystemFont: false},
			{locale: 'jp_JP', countries: ['jp'], flag: 'jp', googleCode: 'ja', label: '日本語', nonBold: true, useSystemFont: true},
			{locale: 'ko_KR', countries: ['kr'], flag: 'kr', googleCode: 'kr', label: '한글', nonBold: true, useSystemFont: true},
			{locale: 'nl_NL', countries: [], flag: 'nl', googleCode: 'nl', googlePlus: true, label: 'Nederlands', nonBold: false, useSystemFont: false},
			{locale: 'no_NO', countries: ['no'], flag: 'no', googleCode: 'no', label: 'Norsk', nonBold: false, useSystemFont: false},
			{locale: 'pt_BR', countries: ['br', 'pt'], flag: 'br', googleCode: 'pt', label: 'Português', nonBold: false, useSystemFont: false},
			{locale: 'ru_RU', countries: ['by', 'kz', 'ru'], flag: 'ru', googleCode: 'ru', label: '﻿Русский', nonBold: false, useSystemFont: false},
			{locale: 'sv_SV', countries: ['sv'], flag: 'sv', googleCode: 'sv', label: 'Svensk', nonBold: false, useSystemFont: false},
			{locale: 'th_TH', countries: [], flag: 'th', googleCode: 'th', googlePlus: true, label: 'ไทย', nonBold: false, useSystemFont: true},
			{locale: 'vi_VN', countries: ['vn'], flag: 'vn', googleCode: 'vi', label: 'Tiếng Việt', nonBold: false, useSystemFont: true},
			{locale: 'tr_TR', countries: [], flag: 'tr', googleCode: 'tr', googlePlus: true, label: 'Türkçe', nonBold: false, useSystemFont: true},
			{locale: 'pl_PL', countries: [], flag: 'pl', googleCode: 'pl', googlePlus: true, label: 'polski', nonBold: false, useSystemFont: false}
		];

		// END:AUTO_GENERATED:LocaleInfo
		
		public static function GetLocales(fGooglePlus:Boolean): Array {
			var aobLocales:Array = fGooglePlus ? _aobGooglePlusLocales : _aobNonGooglePlusLocales;
			if (aobLocales.length == 0) {
				// Filter the list. Only return locales without googlePlus or with googlePlus == fGooglePlus
				for each (var obLocale:Object in _aobAllLocales) {
					if (!('googlePlus' in obLocale) || obLocale.googlePlus == fGooglePlus)
						aobLocales.push(obLocale);
				}
			}
			return aobLocales;
		}

		public static function GetCountryHints(): Array {
			return SafeGetCurrentLocaleInfo().countries;
		}
		
		public static function BoldWeight(): String {
			if (SafeGetCurrentLocaleInfo().nonBold)
				return 'normal'
			else
				return 'bold';
		}
		
		public static function UsingSystemFont(): Boolean {
			return SafeGetCurrentLocaleInfo().useSystemFont;
		}
		
		public static function LocaleToCountry(strLocale:String): String {
			return strLocale.substr(3,2).toLowerCase();
		}
		
		public static function LocaleToLanguage(strLocale:String): String {
			return strLocale.substr(0,2).toLowerCase();
		}
	}
}
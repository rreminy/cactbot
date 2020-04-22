'use strict';

// O6N - Sigmascape 2.0 Normal
[{
  zoneRegex: {
    en: /^Sigmascape \(V2\.0\)$/,
    cn: /^欧米茄时空狭缝 \(西格玛幻境2\)$/,
  },
  timelineFile: 'o6n.txt',
  triggers: [
    {
      id: 'O6N Demonic Shear',
      regex: Regexes.startsUsing({ id: '282A', source: 'Demon Chadarnook' }),
      regexDe: Regexes.startsUsing({ id: '282A', source: 'Gefallen(?:e|er|es|en) Chadarnook' }),
      regexFr: Regexes.startsUsing({ id: '282A', source: 'Démon Chadarnouk' }),
      regexJa: Regexes.startsUsing({ id: '282A', source: 'チャダルヌーク・デーモン' }),
      regexCn: Regexes.startsUsing({ id: '282A', source: '恶魔查达奴克' }),
      regexKo: Regexes.startsUsing({ id: '282A', source: '차다르누크 악령' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'O6N Meteors',
      regex: Regexes.headMarker({ id: '0001' }),
      condition: function(data, matches) {
        return matches.target == data.me;
      },
      infoText: {
        en: 'Drop AOEs Away',
        de: 'AoEs weglocken',
        fr: 'Posez les AoE au loin',
        cn: '远离放置AOE',
      },
      tts: {
        en: 'aoes',
        de: 'Flächen',
        fr: 'aoe',
        cn: 'AOE',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Demon Chadarnook': 'gefallen(?:e|er|es|en) Chadarnook',
        'Easterly': 'Ostwind',
        'Goddess Chadarnook': 'heilig(?:e|er|es|en) Chadarnook',
        'Haunt': 'Verfolgung',
        'I have claimed the girl in the picture!': 'I have claimed the girl in the picture!', // FIXME
        'Portrayal of Earth': 'Erdgemälde',
        'Portrayal of Fire': 'Feuergemälde',
        'Portrayal of Water': 'Wassergemälde',
        'Portrayal of Wind': 'Windgemälde',
        'The Storm\'s Grip': 'Sturmgebiet',
      },
      'replaceText': {
        'Demonic Howl': 'Dämonisches Heulen',
        'Demonic Pain': 'Dämonischer Schmerz',
        'Demonic Shear': 'Dämonische Schere',
        'Demonic Spout': 'Dämonischer Überschwang',
        'Demonic Stone': 'Dämonischer Stein',
        'Demonic Storm': 'Dämonischer Sturm',
        'Demonic Typhoon': 'Dämonischer Taifun',
        'Demonic Wave': 'Dämonische Welle',
        'Divine Lure': 'Göttliche Verlockung',
        'Downpour': 'Flutschwall',
        'Dull Pain': 'Dumpfer Schmerz',
        'Earthquake': 'Erdbeben',
        'Easterlies': 'Ostwinde',
        'Featherlance': 'Federlanze',
        'Flash Fire': 'Blitzfeuer',
        'Flash Gale': 'Blitzwind',
        'Flash Torrent': 'Blitzregen',
        'Last Kiss': 'Todeskuss',
        'Lullaby': 'Wiegenlied',
        'Materialize': 'Materialisierung',
        'Poltergeist': 'Poltergeist',
        'Possession': 'Besessenheit',
        'Release': 'Befreiung',
        'Rock Hard': 'Felsspalter',
        'Song Of Bravery': 'Lied der Tapferkeit',
        'The Price': 'Tödliche Versuchung',
      },
      '~effectNames': {
        'Apathetic': 'Apathie',
        'Black Paint': 'Schwarze Farbe',
        'Blue Paint': 'Blaue Farbe',
        'Fire Resistance Up': 'Feuerresistenz +',
        'Invisible': 'Unsichtbar',
        'Knockback Penalty': 'Rückstoß unwirksam',
        'Last Kiss': 'Todeskuss',
        'Red Paint': 'Rote Farbe',
        'Seduced': 'Versuchung',
        'Slippery Prey': 'Unmarkierbar',
        'Yellow Paint': 'Gelbe Farbe',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Demon Chadarnook': 'démon Chadarnouk',
        'Easterly': 'rafale ultime',
        'Goddess Chadarnook': 'déesse Chadarnouk',
        'Haunt': 'Cauchemar corporel',
        'I have claimed the girl in the picture!': 'I have claimed the girl in the picture!', // FIXME
        'Portrayal of Earth': 'peinture de la terre',
        'Portrayal of Fire': 'peinture du feu',
        'Portrayal of Water': 'peinture de l\'eau',
        'Portrayal of Wind': 'peinture du vent',
        'The Storm\'s Grip': 'Emprise de la tempête',
      },
      'replaceText': {
        'Demonic Howl': 'Hurlement démoniaque',
        'Demonic Pain': 'Douleur démoniaque',
        'Demonic Shear': 'Cisailles démoniaques',
        'Demonic Spout': 'Vague démoniaque',
        'Demonic Stone': 'Pierre démoniaque',
        'Demonic Storm': 'Tempête démoniaque',
        'Demonic Typhoon': 'Typhon démoniaque',
        'Demonic Wave': 'Vague démoniaque',
        'Divine Lure': 'Séduction divine',
        'Downpour': 'Déluge',
        'Dull Pain': 'Douleur sourde',
        'Earthquake': 'Grand séisme',
        'Easterlies': 'Easterlies', // FIXME
        'Featherlance': 'Lance de plume',
        'Flash Fire': 'Flammes subites',
        'Flash Gale': 'Vent subit',
        'Flash Torrent': 'Pluie subite',
        'Last Kiss': 'Baiser fatal',
        'Lullaby': 'Berceuse',
        'Materialize': 'Matérialisation',
        'Poltergeist': 'Esprit frappeur',
        'Possession': 'Possession',
        'Release': 'Libération',
        'Rock Hard': 'Brise-roc',
        'Song Of Bravery': 'Chant du courage',
        'The Price': 'Tentation mortelle',
      },
      '~effectNames': {
        'Apathetic': 'Apathie',
        'Black Paint': 'Pinceau chocobo : noir',
        'Blue Paint': 'Pinceau chocobo : bleu',
        'Fire Resistance Up': 'Résistance au feu accrue',
        'Invisible': 'Invisible',
        'Knockback Penalty': 'Projections désactivées',
        'Last Kiss': 'Baiser fatal',
        'Red Paint': 'Pinceau chocobo : rouge',
        'Seduced': 'Séduction',
        'Slippery Prey': 'Marquage impossible',
        'Yellow Paint': 'Pinceau chocobo : jaune',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Demon Chadarnook': 'チャダルヌーク・デーモン',
        'Easterly': '極風',
        'Goddess Chadarnook': 'チャダルヌーク・ゴッデス',
        'Haunt': '思念体',
        'I have claimed the girl in the picture!': 'I have claimed the girl in the picture!', // FIXME
        'Portrayal of Earth': '土の絵画',
        'Portrayal of Fire': '火の絵画',
        'Portrayal of Water': '水の絵画',
        'Portrayal of Wind': '風の絵画',
        'The Storm\'s Grip': '暴風域',
      },
      'replaceText': {
        'Demonic Howl': 'デモニックハウル',
        'Demonic Pain': 'デモニックペイン',
        'Demonic Shear': 'デモニックシアー',
        'Demonic Spout': 'デモニックスパウト',
        'Demonic Stone': 'デモニックストーン',
        'Demonic Storm': 'デモニックストーム',
        'Demonic Typhoon': 'デモニックタイフーン',
        'Demonic Wave': 'デモニックウェーブ',
        'Divine Lure': '女神の誘惑',
        'Downpour': '水責め',
        'Dull Pain': 'ダルペイン',
        'Earthquake': '大地震',
        'Easterlies': '極風',
        'Featherlance': 'フェザーランス',
        'Flash Fire': 'フラッシュファイア',
        'Flash Gale': 'フラッシュウィンド',
        'Flash Torrent': 'フラッシュレイン',
        'Last Kiss': '死の口づけ',
        'Lullaby': '子守歌',
        'Materialize': '実体化',
        'Poltergeist': 'ポルターガイスト',
        'Possession': '絵画憑依',
        'Release': '憑依解除',
        'Rock Hard': 'ロッククラッシャー',
        'Song Of Bravery': '勇気の歌',
        'The Price': '死の誘い',
      },
      '~effectNames': {
        'Apathetic': '無気力',
        'Black Paint': 'チョコボの筆：黒色',
        'Blue Paint': 'チョコボの筆：水色',
        'Fire Resistance Up': '火属性耐性向上',
        'Invisible': 'インビジブル',
        'Knockback Penalty': 'ノックバック無効',
        'Last Kiss': '死の口づけ',
        'Red Paint': 'チョコボの筆：赤色',
        'Seduced': '誘惑',
        'Slippery Prey': 'マーキング対象外',
        'Yellow Paint': 'チョコボの筆：黄色',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Demon Chadarnook': '恶魔查达奴克',
        'Easterly': '极风',
        'Goddess Chadarnook': '神圣查达奴克',
        'Haunt': '幻影',
        'I have claimed the girl in the picture!': '呵哼哼……这个画作的女人就归我了',
        'Portrayal of Earth': '土之画作',
        'Portrayal of Fire': '火之画作',
        'Portrayal of Water': '水之画作',
        'Portrayal of Wind': '风之画作',
        'The Storm\'s Grip': '暴风域',
      },
      'replaceText': {
        'Demonic Howl': '恶魔啸',
        'Demonic Pain': '恶魔痛',
        'Demonic Shear': '恶魔斩',
        'Demonic Spout': '恶魔喷',
        'Demonic Stone': '恶魔飞石',
        'Demonic Storm': '恶魔风暴',
        'Demonic Typhoon': '恶魔台风',
        'Demonic Wave': '恶魔波',
        'Divine Lure': '女神的诱惑',
        'Downpour': '水刑',
        'Dull Pain': '钝痛',
        'Earthquake': '大地震',
        'Easterlies': '极风',
        'Featherlance': '羽枪',
        'Flash Fire': '闪光炎',
        'Flash Gale': '闪光风',
        'Flash Torrent': '闪光雨',
        'Last Kiss': '死亡之吻',
        'Lullaby': '摇篮曲',
        'Materialize': '实体化',
        'Poltergeist': '骚灵',
        'Possession': '附身画像',
        'Release': '附身解除',
        'Rock Hard': '碎岩',
        'Song Of Bravery': '勇气之歌',
        'The Price': '死亡诱惑',
      },
      '~effectNames': {
        'Apathetic': '无力',
        'Black Paint': '黑色陆行鸟之笔',
        'Blue Paint': '蓝色陆行鸟之笔',
        'Fire Resistance Up': '火属性耐性提升',
        'Invisible': '无形',
        'Knockback Penalty': '击退无效',
        'Last Kiss': '死亡之吻',
        'Red Paint': '红色陆行鸟之笔',
        'Seduced': '魅惑',
        'Slippery Prey': '非目标',
        'Yellow Paint': '黄色陆行鸟之笔',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Demon Chadarnook': '차다르누크 악령',
        'Easterly': '극풍',
        'Goddess Chadarnook': '차다르누크 여신',
        'Haunt': '사념체',
        'I have claimed the girl in the picture!': 'I have claimed the girl in the picture!', // FIXME
        'Portrayal of Earth': '땅의 그림',
        'Portrayal of Fire': '불의 그림',
        'Portrayal of Water': '물의 그림',
        'Portrayal of Wind': '바람의 그림',
        'The Storm\'s Grip': '폭풍 영역',
      },
      'replaceText': {
        'Demonic Howl': '악령의 외침',
        'Demonic Pain': '악령의 고통',
        'Demonic Shear': '악령의 참격',
        'Demonic Spout': '악령의 물기둥',
        'Demonic Stone': '악령의 돌',
        'Demonic Storm': '악령의 폭풍',
        'Demonic Typhoon': '악령의 태풍',
        'Demonic Wave': '악령의 물결',
        'Divine Lure': '여신의 유혹',
        'Downpour': '물고문',
        'Dull Pain': '약한 고통',
        'Earthquake': '대지진',
        'Easterlies': 'Easterlies', // FIXME
        'Featherlance': '깃털창',
        'Flash Fire': '불바다',
        'Flash Gale': '돌풍',
        'Flash Torrent': '급류',
        'Last Kiss': '죽음의 입맞춤',
        'Lullaby': '자장가',
        'Materialize': '실체화',
        'Poltergeist': '폴터가이스트',
        'Possession': '그림 빙의',
        'Release': '빙의 해제',
        'Rock Hard': '암석 분쇄',
        'Song Of Bravery': '용기의 노래',
        'The Price': '죽음의 유혹',
      },
      '~effectNames': {
        'Apathetic': '무기력',
        'Black Paint': '검은색 초코보 붓',
        'Blue Paint': '파란색 초코보 붓',
        'Fire Resistance Up': '불속성 저항 상승',
        'Invisible': '투명화',
        'Knockback Penalty': '밀쳐내기 금지',
        'Last Kiss': '죽음의 입맞춤',
        'Red Paint': '빨간색 초코보 붓',
        'Seduced': '유혹',
        'Slippery Prey': '표식 대상 제외',
        'Yellow Paint': '노란색 초코보 붓',
      },
    },
  ],
}];

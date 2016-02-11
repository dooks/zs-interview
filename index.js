function TernaryTree() {
  var self = this;
  self.root;

  self.add = function(word) { self.insert(self.root, word); };

  self.insert = function(node, chars) {
    var char = chars[0];
    var node;
    if (!char) return null;

    if (!node) {
      // Create new node object
      node = { character: char, left: null, middle: null, right: null, end: false };
    }
    if (!self.root) self.root = node;

    // Traverse tree for insertion, repeating until a leaf is found
    if (char < node.character)      { node.left  = self.insert(node.left,  chars); }
    else if (char > node.character) { node.right = self.insert(node.right, chars); }
    else {
      // Create new subtree at node
      if (chars.length > 1) { node.middle = self.insert(node.middle, chars.slice(1)); }
      else { node.end = true; } // End of word
    }

    return node;
  }

  self.prefixSearch = function(prefix, limit) {
    return self.childWords(self.root, prefix, limit);
  };

  self.search = function(node, chars) {
    var char = chars[0];
    var rest;

    if (!node || !char) return null;

    if (char < node.character) { return self.search(node.left, chars); }
    else if (char > node.character) { return self.search(node.right, chars); }
    else {
      // Continue traversing
      rest = chars.slice(1);
      if (!rest) { return node; }
      else       { return self.search(node.middle, rest); }
    }

    return null;
  };

  self.childWords = function(node, prefix, limit) {
    var foundWords = [],
        parentNode,
        traversalData = { foundWords: foundWords, prefix: prefix };

    if (!node || !prefix) return foundWords;

    parentNode = self.search(node, prefix);

    if (!parentNode) return foundWords;

    self.depthFirstTraversal(parentNode.middle, function(node, data) {
      if (data.foundWords.length >= limit) return null;

      data = {
        foundWords: data.foundWords,
        prefix: data.prefix + node.character
      };

      if (node.end) data.foundWords.push(data.prefix);

      return data;
    }, traversalData);

    return foundWords;
  }

  self.depthFirstTraversal = function(node, visit, char) {
    var new_char;
    if (!node || char === null) return;

    if (node.left) self.depthFirstTraversal(node.left, visit, char);
    new_char = visit(node, char);
    if (node.middle) self.depthFirstTraversal(node.middle, visit, new_char);
    if (node.right)  self.depthFirstTraversal(node.right, visit, char);
  };
};

// Create a tree, and populate with list of countries
var tree = new TernaryTree();
tree.add("CAPE VERDE");
tree.add("SEYCHELLES");
tree.add("LESOTHO");
tree.add("ISRAEL");
tree.add("CHAD");
tree.add("EGYPT");
tree.add("RWANDA");
tree.add("PUERTO RICO");
tree.add("TANZANIA, UNITED REPUBLIC OF");
tree.add("LIBERIA");
tree.add("URUGUAY");
tree.add("EAST TIMOR");
tree.add("POLAND");
tree.add("SYRIAN ARAB REPUBLIC");
tree.add("GUINEA-BISSAU");
tree.add("HAITI");
tree.add("UNITED KINGDOM");
tree.add("FRENCH SOUTHERN TERRITORIES");
tree.add("MONGOLIA");
tree.add("FAROE ISLANDS");
tree.add("SAINT LUCIA");
tree.add("CAMBODIA");
tree.add("GABON");
tree.add("MAURITANIA");
tree.add("ICELAND");
tree.add("AZERBAIJAN");
tree.add("ANDORRA");
tree.add("BOSNIA AND HERZEGOVINA");
tree.add("BERMUDA");
tree.add("LIECHTENSTEIN");
tree.add("LAO PEOPLE'S DEMOCRATIC REPUBLIC");
tree.add("MALAYSIA");
tree.add("DJIBOUTI");
tree.add("CHINA");
tree.add("ARUBA");
tree.add("SOUTH SANDWICH ISLANDS");
tree.add("BULGARIA");
tree.add("SENEGAL");
tree.add("SWEDEN");
tree.add("VIET NAM");
tree.add("NETHERLANDS");
tree.add("AUSTRALIA");
tree.add("NORTHERN MARIANA ISLANDS");
tree.add("GUYANA");
tree.add("BRITISH INDIAN OCEAN TERRITORY");
tree.add("CONGO");
tree.add("JORDAN");
tree.add("AFGHANISTAN");
tree.add("HONG KONG");
tree.add("LITHUANIA");
tree.add("NEPAL");
tree.add("BURKINA FASO");
tree.add("GEORGIA");
tree.add("YUGOSLAVIA");
tree.add("GERMANY");
tree.add("AMERICAN SAMOA");
tree.add("IRELAND");
tree.add("UZBEKISTAN");
tree.add("ALGERIA");
tree.add("GREENLAND");
tree.add("COMOROS");
tree.add("FRENCH POLYNESIA");
tree.add("GUAM");
tree.add("FINLAND");
tree.add("RUSSIAN FEDERATION");
tree.add("DOMINICA");
tree.add("GAMBIA");
tree.add("QATAR");
tree.add("MYANMAR");
tree.add("SWAZILAND");
tree.add("KOREA, REPUBLIC OF");
tree.add("VIRGIN ISLANDS, BRITISH");
tree.add("GHANA");
tree.add("GUADELOUPE");
tree.add("HONDURAS");
tree.add("MALDIVES");
tree.add("FALKLAND ISLANDS (MALVINAS)");
tree.add("SAN MARINO");
tree.add("SAO TOME AND PRINCIPE");
tree.add("NIGER");
tree.add("CONGO");
tree.add("SUDAN");
tree.add("TURKS AND CAICOS ISLANDS");
tree.add("NETHERLANDS ANTILLES");
tree.add("EL SALVADOR");
tree.add("ANTARCTICA");
tree.add("PALAU");
tree.add("R�UNION");
tree.add("SOLOMON ISLANDS");
tree.add("MALTA");
tree.add("PARAGUAY");
tree.add("FRENCH GUIANA");
tree.add("TAJIKISTAN");
tree.add("BAHRAIN");
tree.add("MICRONESIA, FEDERATED STATES OF");
tree.add("MAURITIUS");
tree.add("EQUATORIAL GUINEA");
tree.add("ROMANIA");
tree.add("CAMEROON");
tree.add("BANGLADESH");
tree.add("BHUTAN");
tree.add("LATVIA");
tree.add("ECUADOR");
tree.add("GUATEMALA");
tree.add("NICARAGUA");
tree.add("COLOMBIA");
tree.add("COCOS (KEELING) ISLANDS");
tree.add("ANGUILLA");
tree.add("JAPAN");
tree.add("CHILE");
tree.add("KIRIBATI");
tree.add("AUSTRIA");
tree.add("NEW CALEDONIA");
tree.add("ESTONIA");
tree.add("GIBRALTAR");
tree.add("TURKMENISTAN");
tree.add("SINGAPORE");
tree.add("LIBYAN ARAB JAMABIRIYA");
tree.add("FRANCE");
tree.add("BOUVET ISLAND");
tree.add("SRI LANKA");
tree.add("LUXEMBOURG");
tree.add("MONACO");
tree.add("ANGOLA");
tree.add("FIJI");
tree.add("TRINIDAD AND TOBAGO");
tree.add("TAIWAN, PROVINCE OF CHINA");
tree.add("SIERRA LEONE");
tree.add("MACAU");
tree.add("BRUNEI DARUSSALAM");
tree.add("NEW ZEALAND");
tree.add("KENYA");
tree.add("UNITED STATES");
tree.add("INDIA");
tree.add("HEARD ISLAND AND MCDONALD ISLANDS");
tree.add("ITALY");
tree.add("GRENADA");
tree.add("IRAQ");
tree.add("ARMENIA");
tree.add("MOZAMBIQUE");
tree.add("LEBANON");
tree.add("SAINT PIERRE AND MIQUELON");
tree.add("SAINT KITTS AND NEVIS");
tree.add("BOTSWANA");
tree.add("CUBA");
tree.add("TUNISIA");
tree.add("MONTSERRAT");
tree.add("MALAWI");
tree.add("ETHIOPIA");
tree.add("SLOVAKIA");
tree.add("MEXICO");
tree.add("BRAZIL");
tree.add("GUINEA");
tree.add("INDONESIA");
tree.add("BENIN");
tree.add("HUNGARY");
tree.add("MOROCCO");
tree.add("CAYMAN ISLANDS");
tree.add("SVALBARD AND JAN MAYEN");
tree.add("COOK ISLANDS");
tree.add("ANTIGUA AND BARBUDA");
tree.add("WALLIS AND FUTUNA");
tree.add("UNITED ARAB EMIRATES");
tree.add("MADAGASCAR");
tree.add("PERU");
tree.add("TOGO");
tree.add("PHILIPPINES");
tree.add("KUWAIT");
tree.add("BELGIUM");
tree.add("NIUE");
tree.add("VENEZUELA");
tree.add("BELARUS");
tree.add("SOUTH AFRICA");
tree.add("PITCAIRN");
tree.add("TURKEY");
tree.add("TOKELAU");
tree.add("MACEDONIA");
tree.add("VIRGIN ISLANDS, U.S.");
tree.add("IRAN");
tree.add("SAUDI ARABIA");
tree.add("ALBANIA");
tree.add("MARTINIQUE");
tree.add("ZAMBIA");
tree.add("JAMAICA");
tree.add("NORWAY");
tree.add("KYRGYZSTAN");
tree.add("SWITZERLAND");
tree.add("MAYOTTE");
tree.add("CROATIA");
tree.add("KAZAKHSTAN");
tree.add("CHRISTMAS ISLAND");
tree.add("PAPUA NEW GUINEA");
tree.add("NAMIBIA");
tree.add("BURUNDI");
tree.add("SOMALIA");
tree.add("MALI");
tree.add("PAKISTAN");
tree.add("BARBADOS");
tree.add("NORFOLK ISLAND");
tree.add("SAMOA");
tree.add("NIGERIA");
tree.add("KOREA");
tree.add("BOLIVIA");
tree.add("MOLDOVA, REPUBLIC OF");
tree.add("TUVALU");
tree.add("CANADA");
tree.add("DOMINICAN REPUBLIC");
tree.add("UKRAINE");
tree.add("SAINT HELENA");
tree.add("ZIMBABWE");
tree.add("MARSHALL ISLANDS");
tree.add("VANUATU");
tree.add("OMAN");
tree.add("PANAMA");
tree.add("CZECH REPUBLIC");
tree.add("THAILAND");
tree.add("BELIZE");
tree.add("UGANDA");
tree.add("PORTUGAL");
tree.add("COSTA RICA");
tree.add("ERITREA");
tree.add("CYPRUS");
tree.add("CENTRAL AFRICAN REPUBLIC");
tree.add("SURINAME");
tree.add("YEMEN");
tree.add("SLOVENIA");
tree.add("DENMARK");
tree.add("WESTERN SARARA");
tree.add("GREECE");
tree.add("SPAIN");
tree.add("TONGA");
tree.add("UNITED STATES MINOR OUTLYING ISLANDS");
tree.add("BAHAMAS");
tree.add("ARGENTINS");




// Create globals for input elements
var searchbox       = document.getElementById("searchbox");
var searchlist_cont = document.getElementById("searchlist_cont");
var searchlist      = document.getElementById("searchlist");

// Create event listeners for input
function onSearchboxInput(ev) {
  var words = tree.prefixSearch(searchbox.value.toLocaleUpperCase());

  if(words.length > 0) {
    // Show searchlist_cont
    searchlist_cont.style.visibility = "visible";

    // Populate #searchlist with words
    var html = "";
    for(var i = 0; i < words.length; i++) {
      // Note; strings are immutable. Should use a string builder class
      html += "<li>" + words[i] + "</li>";
    }
    searchlist.innerHTML = html;
  } else {
    // Hide searchlist_cont
    searchlist_cont.style.visibility = "hidden";
  }
}

searchbox.addEventListener("input", onSearchboxInput);
searchlist.addEventListener("click", function(ev) {
  // Populate searchbox when clicking on an element
  if(ev.target.nodeName === "LI") {
    console.log(ev.target.innerHTML);
    searchbox.value = ev.target.innerHTML;
    onSearchboxInput(); // Force update
  }
});

(function() {
  var callWithJQuery;

  callWithJQuery = function(pivotModule) {
    if (typeof exports === "object" && typeof module === "object") {
      return pivotModule(require("jquery"));
    } else if (typeof define === "function" && define.amd) {
      return define(["jquery"], pivotModule);
    } else {
      return pivotModule(jQuery);
    }
  };

  callWithJQuery(function($) {
    var frFmt, frFmtInt, frFmtPct, nf, tpl;
    nf = $.pivotUtilities.numberFormat;
    tpl = $.pivotUtilities.aggregatorTemplates;
    frFmt = nf({
      thousandsSep: " ",
      decimalSep: ","
    });
    frFmtInt = nf({
      digitsAfterDecimal: 0,
      thousandsSep: " ",
      decimalSep: ","
    });
    frFmtPct = nf({
      digitsAfterDecimal: 1,
      scaler: 100,
      suffix: "%",
      thousandsSep: " ",
      decimalSep: ","
    });
    return $.pivotUtilities.locales.it = {
      localeStrings: {
        renderError: "Si è verificato un errore durante la creazione della tabella.",
        computeError: "Si è verificato un errore di calcolo nella tabella.",
        uiRenderError: "Si è verificato un errore durante il disegno di interfaccia della tabella pivot.",
        selectAll: "Seleziona tutto",
        selectNone: "Deseleziona tutto",
        tooMany: "(troppi valori da visualizzare)",
        filterResults: "Filtra i valori",
        totals: "Totali",
        vs: "su",
        by: "da"
      },
      aggregators: {
        "Numero": tpl.count(frFmtInt),
        "Numero di valori unici": tpl.countUnique(frFmtInt),
        "Elenco di valori unici": tpl.listUnique(", "),
        "Somma": tpl.sum(frFmt),
        "Somma intera": tpl.sum(frFmtInt),
        "Media": tpl.average(frFmt),
        "Minimo": tpl.min(frFmt),
        "Massimo": tpl.max(frFmt),
		"Primo": tpl.first(frFmt),
		"Ultimo": tpl.last(frFmt),
        "Rapporto": tpl.sumOverSum(frFmt),
        "Limite superiore 80%": tpl.sumOverSumBound80(true, frFmt),
        "limite inferiore 80%": tpl.sumOverSumBound80(false, frFmt),
        "Somma proporzionale al totale": tpl.fractionOf(tpl.sum(), "total", frFmtPct),
        "Somma proporzionale alla riga": tpl.fractionOf(tpl.sum(), "row", frFmtPct),
        "Somma proporzionale alla colonna": tpl.fractionOf(tpl.sum(), "col", frFmtPct),
        "Numero proporzionale al totale": tpl.fractionOf(tpl.count(), "total", frFmtPct),
        "Numero proporzionale alla riga": tpl.fractionOf(tpl.count(), "row", frFmtPct),
        "Numero proporzionale alla colonna": tpl.fractionOf(tpl.count(), "col", frFmtPct)
      },
	   aggregatorsMap: {
        "Count": "Numero",
        "Count Unique Values": "Numero di valori unici",
        "List Unique Values": "Elenco di valori unici",
        "Sum": "Somma",
        "Integer Sum": "Somma intera",
        "Average": "Media",
        "Minimum": "Minimo",
        "Maximum": "Massimo",
		"First": "Primo",
		"Last": "Ultimo",
        "Sum over Sum": "Rapporto",
        "80% Upper Bound": "Limite superiore 80%",
        "80% Lower Bound": "limite inferiore 80%",
        "Sum as Fraction of Total": "Somma proporzionale al totale",
        "Sum as Fraction of Rows": "Somma proporzionale alla riga",
        "Sum as Fraction of Columns": "Somma proporzionale alla colonna",
        "Count as Fraction of Total": "Numero proporzionale al totale",
        "Count as Fraction of Rows": "Numero proporzionale alla riga",
        "Count as Fraction of Columns": "Numero proporzionale alla colonna"
      },
      renderers: {
        "Tabella": $.pivotUtilities.renderers["Table"],
        "Tabella con grafico": $.pivotUtilities.renderers["Table Barchart"],
        "Mappa di calore": $.pivotUtilities.renderers["Heatmap"],
        "Mappa di calore per righe": $.pivotUtilities.renderers["Row Heatmap"],
        "Mappa di calore per colonne": $.pivotUtilities.renderers["Col Heatmap"]
      },
	  renderersMap: {
		 "Table": "Tabella",
		 "Table Barchart": "Tabella con grafico",
		 "Heatmap": "Mappa di calore",
		 "Row Heatmap": "Mappa di calore per righe",
		 "Col Heatmap": "Mappa di calore per colonne",
		 "Table With Subtotal": "Tabella",
		 "Table With Subtotal Bar Chart": "Tabella con grafico",
		 "Table With Subtotal Heatmap": "Mappa di calore",
		 "Table With Subtotal Row Heatmap": "Mappa di calore per righe",
		 "Table With Subtotal Col Heatmap": "Mappa di calore per colonne",
		 "TSV Export": "TSV Export",
		 "Line Chart": "Grafico lineare",
		 "Bar Chart": "Grafico a barre",
		 "Stacked Bar Chart": "Grafico a barre sovrapposte",
		 "Area Chart": "Grafico ad area",
		 "Scatter Chart": "Grafico a dispersione"		 
	  }
    };
  });

}).call(this);

//# sourceMappingURL=pivot.it.js.map
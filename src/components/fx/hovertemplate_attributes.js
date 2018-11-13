/**
* Copyright 2012-2018, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

module.exports = function(opts, extra) {
    opts = opts || {};
    extra = extra || {};

    var descPart = extra.description ? ' ' + extra.description : '';
    var keys = extra.keys || [];
    if(keys.length > 0) {
        for(var i = 0; i < keys.length; i++) {
            keys[i] = '`' + keys[i] + '`';
        }
        descPart = descPart + 'This trace supports the additional ';
        if(keys.length === 1) {
            descPart = 'variable ' + keys[0];
        } else {
            descPart = 'variables ' + keys.slice(0, -1).join(', ') + ' and ' + keys.slice(-1) + '.';
        }
    }

    var hovertemplate = {
        valType: 'string',
        role: 'info',
        dflt: '',
        arrayOk: true,
        editType: 'none',
        description: [
            'Template string used for rendering the information that appear on hover box.',
            'Note that this will override `hoverinfo`.',
            'Variables are inserted using %{variable}, for example "y: %{y}".',
            'Numbers are formatted using d3-format\'s syntax %{variable:d3-format}, for example "Price: %{y:$.2f}".',
            'See https://github.com/d3/d3-format/blob/master/README.md#locale_format for details on the formatting syntax.',
            'The variables available in `hovertemplate` are the ones emitted as event data described at this link https://plot.ly/javascript/plotlyjs-events/#event-data.',
            descPart
        ].join(' ')
    };

    return hovertemplate;
};

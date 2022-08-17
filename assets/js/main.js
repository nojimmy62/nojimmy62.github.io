(function($) {
    $(document).ready(function() {
        $.jScrollability([
            {
                'selector': '.slide-in-demo',
                'start': 1000,
                'end': 1500,
                'fn': {
                    'opacity': {
                        'start': 0,
                        'end': 100,
                        'unit': '%'
                    }
                }
            }
        ]);
    });
})(jQuery);
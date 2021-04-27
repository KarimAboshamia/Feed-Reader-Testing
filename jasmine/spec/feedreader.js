
$(function() {

    // A new test suite called "RSS Feeds"
    describe('RSS Feeds', function() {

        // Make sure that allFeeds variable has been defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // This test loops through all allFeeds and make sure that all URls is defined
        it('has a URL', function() {
            allFeeds.forEach(function(feeds) {
                expect(feeds.url).toBeDefined();
                expect(feeds.url.length).not.toBe(0);
            });
        });

        // This test loops thorugh all feeds and make sure that all allFeeds has name
        it('has a name', function() {
            allFeeds.forEach(function(feeds) {
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(0);
            });
        });

    });


    // A new test suite called "The menu"
    describe('The menu', function() {

        // Make sure that element is hidden by default
        it('Menu hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Make sure that menu changes visibility when the menu icon is clicked
        it('Menu changes visibility', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    // a new test suite called "Initial Entries"
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        //make sure that there is at least a single element within feed
        it('minimum number of elements', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    // a new test suite called "New Feed Selection"
    describe('New Feed Selection', function() {
        var test

        beforeEach(function(done) {
            loadFeed(0, function() {
                test = $('.feed').html();
                loadFeed(1, done);
            });
        });

        // Make sure that content actually changes when a new feed is loaded
        it('Content changes or not', function() {
            expect($('.feed').html()).not.toEqual(test);
        });
    });
}());

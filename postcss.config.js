const tailwindcss = require('tailwindcss');
const dotenv = require('dotenv');
const autoprefixer = require('autoprefixer');

dotenv.config();

const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: [
        'src/**/*.html',
        'src/**/*.css',
        'src/**/*.js'
        // etc.
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
    plugins: [
        tailwindcss,
        autoprefixer,
        purgecss
    ]
};

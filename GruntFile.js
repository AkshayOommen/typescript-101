module.exports = function(grunt) {
    grunt.initConfig({
        typescript: {
            base: {
                src: './app/*.ts',
                dest: './app',
                sourceMap: true
            }
        },
        watch: {
            scripts: {
                files: ["./app/*.ts"],
                tasks: ["typescript"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask("default", ["typescript", "watch"]);
};
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/style.scss'
        }
      }
    },
	
	imagemin: {
		dynamic: {
			files: [{
				expand: true,
				cwd: 'img/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'images/build/'
			}]
		}
	},
	
	watch: {
		scripts: {
			files: ['sass/*.scss'],
			tasks: ['sass'],
			options: {
				spawn: false,
			},
		} 
	},
	
	browserSync: {
        dev: {
            bsFiles: {
                src : [
					'css/*.css',
                    '*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    }
  });
  
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};
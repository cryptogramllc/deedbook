// Gruntfile.js
module.exports = function (grunt) {
    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    

   
      var config = {
        app: 'app',
        dist: 'dist'
      };

      grunt.initConfig({
        config: config,
        clean: {
            build: {
                src: ["docs/core"]
            }
        },
        
        watch: {

            jade: {
                files: "jade/*.jade",
                tasks: ['jade']  
            },

            gruntfile: {
                files: ['Gruntfile.js']
            },

            less: {
                files: ['css/*.less'],
                tasks: ['less']
            }

        },    

        jade: {
            compile: {
              options: {
                client: false,
                pretty: true
            },

            files: [{
              cwd: "jade/",
              src: ["*.jade"],
              dest: "/var/www/html/deedbook/",
              expand: true,
              ext: ".html"
            }]
           }
        },
        

      less: {
         app: {          
            files: [{         
              expand: true,
              cwd: "/var/www/html/deedbook/css/",
              src: ["*.less"],
              dest: '/var/www/html/deedbook/css/',
              ext: '.css'
            }]
        }
      },


        
       /*
  browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'www/styles/*.css',
                        'html/*.html',
                        'www/scripts/*.js'
                    ]
                },
                 options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
*/

       

        
        });


    //grunt.loadNpmTasks('grunt-browser-sync');
  

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', [
    'jade',
    'sass',
   ]);



};
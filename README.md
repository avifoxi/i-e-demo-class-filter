### Dependencies

For app functionality:
- jQuery 
- lodash 

For Build process:
- gulp 
- browserify + watchify
- gulp-server-livereload

### Process

As per the instructions -- I gave this a bit over 5 hours. And unfortunately I did not finish in that time! 

But the structure and business logic is mostly there.

App workflow description: 

- DOM loads

- MASTER Controller ( './src/app.js' ) function initializes, calls server for class + subject data

- MASTER initializes ClassFilter utility with data, and Filter parses the data -- prepares maps to minimize looping in searching, and returns a function to MASTER that returns the current subSet of classes based on args

- when ClassFilter finishes parsing data -- it returns 'filterables' object to MASTER -- and MASTER builds filter UI, in './src/components/selectCtrl'

- SelectCtrl attaches listener for change of filter options, and alerts MASTER of changes

- ClassesCtrl renders current subset of classes on UI change

#### Notes on minor errors in source data:

- in the 'classes' json, extra comma in line 11
- classes reference subjects at indexes [0, 1, 3]. But the provided subjects json only has 3 elements -- I added a 4th to allow for subjects[3].
const glob = require('glob');
const files = glob.sync('./*.*');
module.exports = files;

/*
import preval from 'preval.macro';

const fileList = preval`
  module.exports = require('./get-file-list');
`;

{fileList.map(file=> (
    <div key={file}>{file}</div>
))}
*/
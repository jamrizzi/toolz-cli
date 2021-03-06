import childProcess from 'child_process';

export default async function test() {
  await new Promise((resolve, reject) => {
    childProcess.spawn('node ./node_modules/babel-cli/bin/babel-node ./src/do-task-cli run start', {
      stdio: 'inherit',
      shell: true
    }).on('close', resolve).on('error', reject);
  });
}

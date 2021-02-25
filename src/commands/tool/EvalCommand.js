callback: async ({message, args, text, client, prefix, instance}) => {
  if (!args[0]) return message.reply('Pls provide some code to evaluate');

  try {
   const start = process.hrtime();
   let output = eval(text);
   const difference = process.hrtime(start);
   if (typeof output !== 'string') output = inspect(output, { depth: 2 });
   if (output.length > 1995) {
       SourceBin.create([
new SourceBin.BinFile({
   name: 'Evaled Content',
   content: output,
   languageId: 'js'
})
], {
title: 'Content',
description: 'This is awesome'
})
.then((result) => {
   const url = result.url;
   return message.channel.send(stripIndents`
**Execution completed in ${difference[0] > 0 ? `${difference[0]}s ` : ''}${difference[1] / 1e6}ms**
\`\`\`js
${url}
\`\`\`
`);
})
} else {
   
   return message.channel.send(stripIndents`
   **Execution completed in ${difference[0] > 0 ? `${difference[0]}s ` : ''}${difference[1] / 1e6}ms**
   \`\`\`js
   ${output}
   \`\`\`
   `);
  } } catch (err) {
      return message.channel.send(stripIndents`
      \`${err}\`
      `)
  }
}

const { Functions: Func, AlyaApi } = new (require('@moonr/utils'))
global.creator = '@naando.io - moon.bot'
global.Api = AlyaApi
global.header = `moon-bot v${require('../../package.json').version}`
global.footer = Func.Styles('simple whatsapp bot made by moon')
global.status = Object.freeze({
   wait: Func.texted('bold', 'Processing. . .'),
   invalid: Func.texted('bold', 'URL invalid yang bener lah anj!'),
   wrong: Func.texted('bold', 'Wrong format!'),
   error: Func.texted('bold', 'Error bang'),
   errorF: Func.texted('bold', 'fitur sedang error kak'),
   premium: Func.texted('bold', 'khusus premium premium dek.'),
   admin: Func.texted('bold', 'This command is specific to Admins.'),
   botAdmin: Func.texted('bold', 'Make the bot admin to use this command.'),
   owner: Func.texted('bold', 'khusus owner anj.'),
   mod: Func.texted('bold', 'This command is for Moderators only.'),
   group: Func.texted('bold', 'This command is Group specific.'),
   private: Func.texted('bold', 'coba fitur ini di pm anj.'),
   register: Func.texted('bold', 'Please register first to use this command.'),
   game: Func.texted('bold', 'The game feature has not been activated.'),
   rpg: Func.texted('bold', 'The RPG feature has not been activated.'),
   restrict: Func.texted('bold', 'This feature is disabled')
})
Func.updateFile(require.resolve(__filename))

export const generateSlug = (text: string) => {
  if (!text) return 'anime';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        
    .replace(/[^\w\-]+/g, '')    
    .replace(/\-\-+/g, '-');      
};

export const stripHtml = (html: string) => {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '');
};

export const formatAniListDate = (dateObj: { year?: number; month?: number; day?: number }) => {
  if (!dateObj || !dateObj.year) return 'TBA';
  const date = new Date(dateObj.year, (dateObj.month || 1) - 1, dateObj.day || 1);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export const formatCountdown = (seconds: number) => {
  if (!seconds) return '';
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${d}d ${h}h ${m}m`;
};

export const formatRanking = (ranking: any) => {
  const context = ranking.context.toLowerCase();
  if (ranking.allTime) return `#${ranking.rank} ${context} all time`;
  const season = ranking.season ? `${ranking.season.toLowerCase()} ` : '';
  const year = ranking.year ? ranking.year : '';
  return `#${ranking.rank} ${context} ${season}${year}`.trim();
};

export const getDynamicSeasons = () => {
  const now = new Date();
  const month = now.getMonth(); 
  const year = now.getFullYear();

  let currentSeason, nextSeason, nextYear = year;

  // Winter: Jan, Feb, Mar (0, 1, 2)
  if (month >= 0 && month <= 2) {
    currentSeason = 'WINTER';
    nextSeason = 'SPRING';
  } 
  // Spring: Apr, May, Jun (3, 4, 5)
  else if (month >= 3 && month <= 5) {
    currentSeason = 'SPRING';
    nextSeason = 'SUMMER';
  } 
  // Summer: Jul, Aug, Sep (6, 7, 8)
  else if (month >= 6 && month <= 8) {
    currentSeason = 'SUMMER';
    nextSeason = 'FALL';
  } 
  // Fall: Oct, Nov, Dec (9, 10, 11)
  else {
    currentSeason = 'FALL';
    nextSeason = 'WINTER';
    nextYear = year + 1;
  }

  return { currentSeason, currentYear: year, nextSeason, nextYear };
};

export const slugify = (text: string) => {
  if (!text) return 'unknown';
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           
    .replace(/[^\w\-]+/g, '')       
    .replace(/\-\-+/g, '-')          
    .replace(/^-+/, '')             
    .replace(/-+$/, '');            
};

export const formatDateOfBirth = (dateObj: { year?: number, month?: number, day?: number }) => {
  if (!dateObj || (!dateObj.year && !dateObj.month && !dateObj.day)) return null;
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  let result = "";
  if (dateObj.month && dateObj.day) result += `${monthNames[dateObj.month - 1]} ${dateObj.day}`;
  if (dateObj.year) result += (result ? `, ${dateObj.year}` : `${dateObj.year}`);
  return result;
};

export const parseAniListMarkdown = (text: string) => {
  if (!text) return '';
  
  let html = text;
  const links: string[] = [];

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, url) => {
    let parsedLabel = label
      .replace(/__([^_]+)__/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>')
      .replace(/_([^_]+)_/g, '<em class="italic">$1</em>');
      
    links.push(`<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-600 font-medium hover:underline underline-offset-2">${parsedLabel}</a>`);
    
    return `@@@LINK${links.length - 1}@@@`; 
  });

  html = html.replace(/__([^_]+)__/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-white">$1</strong>');
  html = html.replace(/_([^_]+)_/g, '<em class="italic">$1</em>');
  html = html.replace(/~!(.*?)!~/gs, `<span class="cursor-pointer group" onclick="this.children[0].classList.toggle('hidden'); this.children[1].classList.toggle('hidden');"><span class="text-slate-500 dark:text-slate-400 italic underline decoration-dashed underline-offset-4 group-hover:text-primary-500 transition-colors" title="Reveal spoiler">[Click to reveal spoiler]</span><span class="hidden">$1</span></span>`);

  links.forEach((linkHtml, i) => {
    html = html.replace(`@@@LINK${i}@@@`, linkHtml);
  });

  html = html.replace(/\n\n/g, '</p><p class="mt-4">').replace(/\n/g, '<br />');

  return `<p class="leading-relaxed">${html}</p>`;
};
/**
 * Generates and triggers download of a standardized vCard 3.0 (.vcf) file.
 * Compatible with iOS (Apple Contacts) and Android (Google Contacts).
 */
export function downloadVCard(profile) {
  const { person, contact, companyName, tagline, slogan } = profile;

  // Format clean name
  const fullName = person.name && person.name !== "[Your Name]" 
    ? person.name 
    : `${companyName}`;
  
  const title = person.designation || "Software Solutions";
  const org = companyName || "Galaxy Software Solutions";
  const note = `${slogan || "Smart Solutions. Better Future."} - ${tagline || "Custom Software & Digital Solutions"}`;

  // Assemble vCard lines (vCard 3.0 Standard)
  const vcardLines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN;CHARSET=UTF-8:${fullName}`,
    `N;CHARSET=UTF-8:${fullName};;;;`,
    `ORG;CHARSET=UTF-8:${org}`,
    `TITLE;CHARSET=UTF-8:${title}`,
  ];

  // Primary Phone
  if (contact.primaryPhone) {
    const cleanPhone = contact.primaryPhoneClean || contact.primaryPhone.replace(/\s+/g, '');
    vcardLines.push(`TEL;TYPE=CELL,VOICE,PREF:${cleanPhone}`);
  }

  // Secondary Phone
  if (contact.secondaryPhone) {
    const cleanPhone = contact.secondaryPhoneClean || contact.secondaryPhone.replace(/\s+/g, '');
    vcardLines.push(`TEL;TYPE=WORK,VOICE:${cleanPhone}`);
  }

  // Email
  if (contact.email) {
    vcardLines.push(`EMAIL;TYPE=INTERNET,WORK,PREF:${contact.email}`);
  }

  // Website
  if (contact.website) {
    vcardLines.push(`URL;TYPE=WORK:${contact.website}`);
  }

  // Address
  const city = contact.city || "Kottayam";
  const state = contact.state || "Kerala";
  const country = contact.country || "India";
  vcardLines.push(`ADR;TYPE=WORK:;;;${city};${state};;${country}`);

  // Note / Bio
  vcardLines.push(`NOTE;CHARSET=UTF-8:${note}`);
  vcardLines.push(`REV:${new Date().toISOString()}`);
  vcardLines.push("END:VCARD");

  const vcardString = vcardLines.join("\r\n");

  // Create Blob and trigger direct browser download
  const blob = new Blob([vcardString], { type: "text/vcard;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  
  // Safe filename
  const safeFilename = `${companyName.replace(/[^a-zA-Z0-9]/g, '_')}_Contact.vcf`;
  link.setAttribute("download", safeFilename);
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  setTimeout(() => {
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }, 400);

  return true;
}

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-neutral-800 px-6 py-8 text-center">
      <p className="text-lg font-medium text-white">
        I’d love to connect and hear from you.
      </p>

      <p className="mt-2 text-sm text-neutral-400">
        Whether it’s a project, an opportunity, or just a conversation — feel
        free to reach out.
      </p>

      <p className="mt-5 text-xs text-neutral-600">
        © {new Date().getFullYear()} Utkarsh. Thank you for visiting.
      </p>
    </footer>
  );
};

export default Footer;

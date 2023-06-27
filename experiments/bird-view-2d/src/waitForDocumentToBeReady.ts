function isDocumentReady(document: Document) {
  return (
    document.readyState === 'complete' || document.readyState === 'interactive'
  );
}

function waitForDocumentToBeReady(document = window.document) {
  return new Promise<void>((resolve) => {
    const handleLoad = () => {
      if (!isDocumentReady(document)) return;

      document.removeEventListener('load', handleLoad);
      resolve();
    };

    document.addEventListener('load', handleLoad);

    // Avoids never ending promises when 'document' is ready before executing.
    handleLoad();
  });
}

export default waitForDocumentToBeReady;

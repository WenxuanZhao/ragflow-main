export default {
  translation: {
    common: {
      delete: 'Delete',
      deleteModalTitle: 'Are you sure to delete this item?',
      ok: 'Yes',
      cancel: 'No',
      total: 'Total',
      rename: 'Rename',
      name: 'Name',
      save: 'Save',
      namePlaceholder: 'Please input name',
      next: 'Next',
      create: 'Create',
      edit: 'Edit',
      upload: 'Upload',
      english: 'English',
      portugueseBr: 'Portuguese (Brazil)',
      chinese: 'Simplified Chinese',
      traditionalChinese: 'Traditional Chinese',
      language: 'Language',
      languageMessage: 'Please input your language!',
      languagePlaceholder: 'select your language',
      copy: 'Copy',
      copied: 'Copied',
      comingSoon: 'Coming soon',
      download: 'Download',
      close: 'Close',
      preview: 'Preview',
      move: 'Move',
      warn: 'Warn',
      action: 'Action',
      s: 'S',
      pleaseSelect: 'Please select',
      pleaseInput: 'Please input',
      submit: 'Submit',
      embedIntoSite: 'Embed into webpage',
      previousPage: 'Previous',
      nextPage: 'Next',
    },
    login: {
      login: 'Sign in',
      signUp: 'Sign up',
      loginDescription: 'We’re so excited to see you again!',
      registerDescription: 'Glad to have you on board!',
      emailLabel: 'Email',
      emailPlaceholder: 'Please input email',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Please input password',
      rememberMe: 'Remember me',
      signInTip: 'Don’t have an account?',
      signUpTip: 'Already have an account?',
      nicknameLabel: 'Nickname',
      nicknamePlaceholder: 'Please input nickname',
      register: 'Create an account',
      continue: 'Continue',
      title: 'Start building your smart assistants.',
      description:
        'Sign up for free to explore top RAG technology. Create knowledge bases and AIs to empower your business.',
      review: 'from 500+ reviews',
    },
    header: {
      knowledgeBase: 'Knowledge Base',
      chat: 'Chat',
      register: 'Register',
      signin: 'Sign in',
      home: 'Home',
      setting: 'User settings',
      logout: 'Log out',
      fileManager: 'File Management',
      flow: 'Agent',
      search: 'Search',
    },
    knowledgeList: {
      welcome: 'Welcome back',
      description: 'Which knowledge bases will you use today?',
      createKnowledgeBase: 'Create knowledge base',
      name: 'Name',
      namePlaceholder: 'Please input name!',
      doc: 'Docs',
      searchKnowledgePlaceholder: 'Search',
      noMoreData: `That's all. Nothing more.`,
    },
    knowledgeDetails: {
      dataset: 'Dataset',
      testing: 'Retrieval testing',
      files: 'files',
      configuration: 'Configuration',
      knowledgeGraph: 'Knowledge graph',
      name: 'Name',
      namePlaceholder: 'Please input name!',
      doc: 'Docs',
      datasetDescription:
        '😉 Please wait for your file to finish parsing before starting an AI-powered chat.',
      addFile: 'Add file',
      searchFiles: 'Search your files',
      localFiles: 'Local files',
      emptyFiles: 'Create empty file',
      webCrawl: 'Web Crawl',
      chunkNumber: 'Chunk Number',
      uploadDate: 'Upload Date',
      chunkMethod: 'Chunk Method',
      enabled: 'Enable',
      disabled: 'Disable',
      action: 'Action',
      parsingStatus: 'Parsing Status',
      processBeginAt: 'Begin at',
      processDuration: 'Duration',
      progressMsg: 'Progress',
      testingDescription:
<<<<<<< HEAD
        'Conduct a retrieval test to check if RAGFlow can recover the intended content for the LLM.',
      similarityThreshold: 'Similarity threshold',
      similarityThresholdTip:
        'RAGFlow employs either a combination of weighted keyword similarity and weighted vector cosine similarity, or a combination of weighted keyword similarity and weighted reranking score during retrieval. This parameter sets the threshold for similarities between the user query and chunks. Any chunk with a similarity score below this threshold will be excluded from the results.',
      vectorSimilarityWeight: 'Keywords similarity weight',
=======
        'Conduct a retrieval test to check if RAGFlow can recover the intended content for the LLM. If you have adjusted the default settings, such as keyword similarity weight or similarity threshold, to achieve the optimal results, be aware that these changes will not be automatically saved. You must apply them to your chat assistant settings or the **Retrieval** agent component settings.',
      similarityThreshold: 'Similarity threshold',
      similarityThresholdTip:
        'RAGFlow employs either a combination of weighted keyword similarity and weighted vector cosine similarity, or a combination of weighted keyword similarity and weighted reranking score during retrieval. This parameter sets the threshold for similarities between the user query and chunks. Any chunk with a similarity score below this threshold will be excluded from the results.',
      vectorSimilarityWeight: 'Keyword similarity weight',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      vectorSimilarityWeightTip:
        'This sets the weight of keyword similarity in the combined similarity score, either used with vector cosine similarity or with reranking score. The total of the two weights must equal 1.0.',
      testText: 'Test text',
      testTextPlaceholder: 'Input your question here!',
      testingLabel: 'Testing',
      similarity: 'Hybrid similarity',
      termSimilarity: 'Term similarity',
      vectorSimilarity: 'Vector similarity',
      hits: 'Hits',
      view: 'View',
      filesSelected: 'Files selected',
      upload: 'Upload',
      run: 'Parse',
<<<<<<< HEAD
      runningStatus0: 'UNParsed',
      runningStatus1: 'Parsing',
      runningStatus2: 'CANCEL',
=======
      runningStatus0: 'PENDING',
      runningStatus1: 'PARSING',
      runningStatus2: 'CANCELED',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      runningStatus3: 'SUCCESS',
      runningStatus4: 'FAIL',
      pageRanges: 'Page Ranges',
      pageRangesTip:
        'Range of pages to be parsed; pages outside this range will not be processed.',
      fromPlaceholder: 'from',
      fromMessage: 'Missing start page number',
      toPlaceholder: 'to',
      toMessage: 'Missing end page number (excluded)',
<<<<<<< HEAD
      layoutRecognize: 'Layout recognition & OCR',
      layoutRecognizeTip:
        'Use visual models for layout analysis to better understand the structure of the document and effectively locate document titles, text blocks, images, and tables. If disabled, only the plain text in the PDF will be retrieved.',
=======
      layoutRecognize: 'Document parser',
      layoutRecognizeTip:
        'Use a visual model for PDF layout analysis to effectively locate document titles, text blocks, images, and tables. If the naive option is chosen, only the plain text in the PDF will be retrieved. Please note that this option currently works ONLY for PDF documents.',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      taskPageSize: 'Task page size',
      taskPageSizeMessage: 'Please input your task page size!',
      taskPageSizeTip: `During layout recognition, a PDF file is split into chunks and processed in parallel to increase processing speed. This parameter sets the size of each chunk. A larger chunk size reduces the likelihood of splitting continuous text between pages.`,
      addPage: 'Add page',
      greaterThan: 'The current value must be greater than to!',
      greaterThanPrevious:
        'The current value must be greater than the previous to!',
      selectFiles: 'Select files',
      changeSpecificCategory: 'Change specific category',
<<<<<<< HEAD
      uploadTitle: 'Click or drag file to this area to upload',
      uploadDescription:
        'Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.',
=======
      uploadTitle: 'Drag and drop your file here to upload',
      uploadDescription:
        'Supports single or bulk file upload. Files must not exceed 10MB each, with a maximum of 128 files.',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      chunk: 'Chunk',
      bulk: 'Bulk',
      cancel: 'Cancel',
      rerankModel: 'Rerank model',
      rerankPlaceholder: 'Please select',
      rerankTip: `If left empty, RAGFlow will use a combination of weighted keyword similarity and weighted vector cosine similarity; if a rerank model is selected, a weighted reranking score will replace the weighted vector cosine similarity. Please be aware that using a rerank model will significantly increase the system's response time.`,
      topK: 'Top-K',
      topKTip: `K chunks will be sent into the rerank model.`,
      delimiter: `Delimiters`,
      delimiterTip:
        'A delimiter or separator can consist of one or multiple special characters. If it is multiple characters, ensure they are enclosed in backticks( ``). For example, if you configure your delimiters like this: \n`##`;, then your texts will be separated at line breaks, double hash symbols (##), or semicolons.',
      html4excel: 'Excel to HTML',
      html4excelTip: `When enabled, the spreadsheet will be parsed into HTML tables, and at most 256 rows for one table. Otherwise, it will be parsed into key-value pairs by row.`,
      autoKeywords: 'Auto-keyword',
      autoKeywordsTip: `Automatically extract N keywords for each chunk to increase their ranking for queries containing those keywords. You can check or update the added keywords for a chunk from the chunk list. Be aware that extra tokens will be consumed by the LLM specified in 'System model settings'.`,
      autoQuestions: 'Auto-question',
      autoQuestionsTip: `Automatically extract N questions for each chunk to increase their ranking for queries containing those questions. You can check or update the added questions for a chunk from the chunk list. This feature will not disrupt the chunking process if an error occurs, except that it may add an empty result to the original chunk. Be aware that extra tokens will be consumed by the LLM specified in 'System model settings'.`,
      redo: 'Do you want to clear the existing {{chunkNum}} chunks?',
      setMetaData: 'Set Meta Data',
      pleaseInputJson: 'Please enter JSON',
      documentMetaTips: `<p>The meta data is in Json format(it's not searchable). It will be added into prompt for LLM if any chunks of this document are included in the prompt.</p>
<p>Examples:</p>
<b>The meta data is:</b><br>
<code>
  {
      "Author": "Alex Dowson",
      "Date": "2024-11-12"
  }
</code><br>
<b>The prompt will be:</b><br>
<p>Document: the_name_of_document</p>
<p>Author: Alex Dowson</p>
<p>Date: 2024-11-12</p>
<p>Relevant fragments as following:</p>
<ul>
<li>  Here is the chunk content....</li>
<li>  Here is the chunk content....</li>
</ul>
`,
      metaData: 'Meta data',
      deleteDocumentConfirmContent:
        'The document is associated with the knowledge graph. After deletion, the related node and relationship information will be deleted, but the graph will not be updated immediately. The update graph action is performed during the process of parsing the new document that carries the knowledge graph extraction task.',
<<<<<<< HEAD
=======
      plainText: 'Naive',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    },
    knowledgeConfiguration: {
      titleDescription:
        'Update your knowledge base configuration here, particularly the chunk method.',
      name: 'Knowledge base name',
      photo: 'Knowledge base photo',
      description: 'Description',
      language: 'Document language',
      languageMessage: 'Please input your language!',
      languagePlaceholder: 'Please input your language!',
      permissions: 'Permissions',
      embeddingModel: 'Embedding model',
      chunkTokenNumber: 'Chunk token number',
      chunkTokenNumberMessage: 'Chunk token number is required',
      embeddingModelTip:
        'The model that converts chunks into embeddings. It cannot be changed once the knowledge base has chunks. To switch to a different embedding model, you must delete all existing chunks in the knowledge base.',
      permissionsTip:
        "If set to 'Team', all team members will be able to manage the knowledge base.",
      chunkTokenNumberTip:
        'It sets the token threshold for a chunk. A paragraph with fewer tokens than this threshold will be combined with the following paragraph until the token count exceeds the threshold, at which point a chunk is created.',
      chunkMethod: 'Chunk method',
      chunkMethodTip: 'View the tips on the right.',
      upload: 'Upload',
      english: 'English',
      chinese: 'Chinese',
      portugueseBr: 'Portuguese (Brazil)',
      embeddingModelPlaceholder: 'Please select a embedding model',
      chunkMethodPlaceholder: 'Please select a chunk method',
      save: 'Save',
      me: 'Only me',
      team: 'Team',
      cancel: 'Cancel',
      methodTitle: 'Chunk method description',
      methodExamples: 'Examples',
      methodExamplesDescription:
        'The following screenshots are provided for clarity.',
      dialogueExamplesTitle: 'Dialogue examples',
      methodEmpty:
        'This will display a visual explanation of the knowledge base categories',
      book: `<p>Supported file formats are <b>DOCX</b>, <b>PDF</b>, <b>TXT</b>.</p><p>
      For each book in PDF, please set the <i>page ranges</i> to remove unwanted information and reduce analysis time.</p>`,
      laws: `<p>Supported file formats are <b>DOCX</b>, <b>PDF</b>, <b>TXT</b>.</p><p>
      Legal documents typically follow a rigorous writing format. We use text feature to identify split point. 
      </p><p>
      The chunk has a granularity consistent with 'ARTICLE', ensuring all upper level text is included in the chunk.
      </p>`,
      manual: `<p>Only <b>PDF</b> is supported.</p><p>
      We assume that the manual has a hierarchical section structure, using the lowest section titles as basic unit for chunking documents. Therefore, figures and tables in the same section will not be separated, which may result in larger chunk sizes.
      </p>`,
      naive: `<p>Supported file formats are <b>DOCX, EXCEL, PPT, IMAGE, PDF, TXT, MD, JSON, EML, HTML</b>.</p>
      <p>This method chunks files using a 'naive' method: </p>
      <p>
      <li>Use vision detection model to split the texts into smaller segments.</li>
      <li>Then, combine adjacent segments until the token count exceeds the threshold specified by 'Chunk token number', at which point a chunk is created.</li></p>`,
      paper: `<p>Only <b>PDF</b> file is supported.</p><p>
      Papers will be split by section, such as <i>abstract, 1.1, 1.2</i>. </p><p>
      This approach enables the LLM to summarize the paper more effectively and to provide more comprehensive, understandable responses. 
      However, it also increases the context for AI conversations and adds to the computational cost for the LLM. So during a conversation, consider reducing the value of ‘<b>topN</b>’.</p>`,
      presentation: `<p>Supported file formats are <b>PDF</b>, <b>PPTX</b>.</p><p>
      Every page in the slides is treated as a chunk, with its thumbnail image stored.</p><p>
      <i>This chunk method is automatically applied to all uploaded PPT files, so you do not need to specify it manually.</i></p>`,
      qa: `
      <p>
<<<<<<< HEAD
      This chunk method supports <b>EXCEL</b> and <b>CSV/TXT</b> file formats.
    </p>
    <li>
      If a file is in <b>Excel</b> format, it should contain two columns
=======
      This chunk method supports <b>XLSX</b> and <b>CSV/TXT</b> file formats.
    </p>
    <li>
      If a file is in <b>XLSX</b> format, it should contain two columns
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      without headers: one for questions and the other for answers, with the
      question column preceding the answer column. Multiple sheets are
      acceptable, provided the columns are properly structured.
    </li>
    <li>
      If a file is in <b>CSV/TXT</b> format, it must be UTF-8 encoded with TAB as the delimiter to separate questions and answers.
    </li>
    <p>
      <i>
        Lines of texts that fail to follow the above rules will be ignored, and
        each Q&A pair will be considered a distinct chunk.
      </i>
    </p>
      `,
      resume: `<p>Supported file formats are <b>DOCX</b>, <b>PDF</b>, <b>TXT</b>.
      </p><p>
      Résumés of various forms are parsed and organized into structured data to facilitate candidate search for recruiters.
      </p>
      `,
<<<<<<< HEAD
      table: `<p>Supported file formats are <b>EXCEL</b> and <b>CSV/TXT</b>.</p><p>
      Here're some prerequisites and tips:
=======
      table: `<p>Supported file formats are <b>XLSX</b> and <b>CSV/TXT</b>.</p><p>
      Here are some prerequisites and tips:
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      <ul>
    <li>For CSV or TXT file, the delimiter between columns must be <em><b>TAB</b></em>.</li>
    <li>The first row must be column headers.</li>
    <li>Column headers must be meaningful terms to aid your LLM's understanding.
    It is good practice to juxtapose synonyms separated by a slash <i>'/'</i> and to enumerate values using brackets, for example: <i>'Gender/Sex (male, female)'</i>.<p>
    Here are some examples of headers:<ol>
        <li>supplier/vendor<b>'TAB'</b>Color (Yellow, Blue, Brown)<b>'TAB'</b>Sex/Gender (male, female)<b>'TAB'</b>size (M, L, XL, XXL)</li>
        </ol>
        </p>
    </li>
    <li>Every row in table will be treated as a chunk.</li>
    </ul>`,
      picture: `
    <p>Image files are supported, with video support coming soon.</p><p>
    This method employs an OCR model to extract texts from images.
    </p><p>
    If the text extracted by the OCR model is deemed insufficient, a specified visual LLM will be used to provide a description of the image.
    </p>`,
      one: `
    <p>Supported file formats are <b>DOCX, EXCEL, PDF, TXT</b>.
    </p><p>
    This method treats each document in its entirety as a chunk.
    </p><p>
    Applicable when you require the LLM to summarize the entire document, provided it can handle that amount of context length.
    </p>`,
      knowledgeGraph: `<p>Supported file formats are <b>DOCX, EXCEL, PPT, IMAGE, PDF, TXT, MD, JSON, EML</b>

<p>This approach chunks files using the 'naive'/'General' method. It splits a document into segments and then combines adjacent segments until the token count exceeds the threshold specified by 'Chunk token number', at which point a chunk is created.</p>
<p>The chunks are then fed to the LLM to extract entities and relationships for a knowledge graph and a mind map.</p>
<p>Ensure that you set the <b>Entity types</b>.</p>`,
<<<<<<< HEAD
      tag: `<p>Knowlege base using 'Tag' as a chunking method is supposed to be used by other knowledge bases to add tags to their chunks, queries to which will also be with tags too.</p>
<p>Knowlege base using 'Tag' as a chunking method is <b>NOT</b> supposed to be involved in RAG procedure.</p>
<p>The chunks in this knowledge base are examples of tags, which demonstrate the entire tag set and the relevance between chunk and tags.</p>

<p>This chunk method supports <b>EXCEL</b> and <b>CSV/TXT</b> file formats.</p>
<p>If a file is in <b>Excel</b> format, it should contain two columns without headers: one for content and the other for tags, with the content column preceding the tags column. Multiple sheets are acceptable, provided the columns are properly structured.</p>
<p>If a file is in <b>CSV/TXT</b> format, it must be UTF-8 encoded with TAB as the delimiter to separate content and tags.</p>
<p>In tags column, there're English <b>comma</b> between tags.</p>
=======
      tag: `<p>Knowledge base using 'Tag' as a chunking method is supposed to be used by other knowledge bases to add tags to their chunks, queries to which will also be with tags too.</p>
<p>Knowledge base using 'Tag' as a chunking method is <b>NOT</b> supposed to be involved in RAG procedure.</p>
<p>The chunks in this knowledge base are examples of tags, which demonstrate the entire tag set and the relevance between chunk and tags.</p>

<p>This chunk method supports <b>XLSX</b> and <b>CSV/TXT</b> file formats.</p>
<p>If a file is in <b>XLSX</b> format, it should contain two columns without headers: one for content and the other for tags, with the content column preceding the tags column. Multiple sheets are acceptable, provided the columns are properly structured.</p>
<p>If a file is in <b>CSV/TXT</b> format, it must be UTF-8 encoded with TAB as the delimiter to separate content and tags.</p>
<p>In tags column, there are English <b>comma</b> between tags.</p>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
<i>Lines of texts that fail to follow the above rules will be ignored, and each  pair will be considered a distinct chunk.</i>
`,
      useRaptor: 'Use RAPTOR to enhance retrieval',
      useRaptorTip:
        'Recursive Abstractive Processing for Tree-Organized Retrieval, see https://huggingface.co/papers/2401.18059 for more information.',
      prompt: 'Prompt',
      promptTip: 'LLM prompt used for summarization.',
      promptMessage: 'Prompt is required',
      promptText: `Please summarize the following paragraphs. Be careful with the numbers, do not make things up. Paragraphs as following:
      {cluster_content}
The above is the content you need to summarize.`,
      maxToken: 'Max token',
      maxTokenTip: 'Maximum token number for summarization.',
      maxTokenMessage: 'Max token is required',
      threshold: 'Threshold',
      thresholdTip: 'The bigger the threshold is the less cluster will be.',
      thresholdMessage: 'Threshold is required',
      maxCluster: 'Max cluster',
      maxClusterTip: 'Maximum cluster number.',
      maxClusterMessage: 'Max cluster is required',
      randomSeed: 'Random seed',
      randomSeedMessage: 'Random seed is required',
      entityTypes: 'Entity types',
      vietnamese: 'Vietnamese',
      pageRank: 'Page rank',
      pageRankTip: `This increases the relevance score of the knowledge base. Its value will be added to the relevance score of all retrieved chunks from this knowledge base. Useful when you are searching within multiple knowledge bases and wanting to assign a higher pagerank score to a specific one.`,
      tagName: 'Tag',
      frequency: 'Frequency',
      searchTags: 'Search tags',
      tagCloud: 'Cloud',
      tagTable: 'Table',
<<<<<<< HEAD
      tagSet: 'Tag set',
      tagSetTip: `
     <p> Selecting the 'Tag' knowledge bases helps to tag every chunks. </p>
<p>Query to those chunks will also be with tags too.</p>
This procedure will improve precision of retrieval by adding more information to the dataset, especially when there's a large set of chunks.
<p>Difference between tags and keywords:</p>
<ul>
  <li>Tag is a close set which is defined and manipulated by user while keyword is an open set.</li>
  <li>You need to upload tag sets with samples prior to use.</li>
  <li>Keywords are generated by LLM which is expensive and time consuming.</li>
=======
      tagSet: 'Tag sets',
      tagSetTip: `
     <p> Select one or multiple tag knowledge bases to auto-tag chunks in your knowledge base. </p>
<p>The user query will also be auto-tagged.</p>
This auto-tag feature enhances retrieval by adding another layer of domain-specific knowledge to the existing dataset.
<p>Difference between auto-tag and auto-keyword:</p>
<ul>
  <li>A tag knowledge base is a user-defined close set, whereas keywords extracted by the LLM can be regarded as an open set.</li>
  <li>You must upload tag sets in specified formats before running the auto-tag feature.</li>
  <li>The auto-keyword feature is dependent on the LLM and consumes a significant number of tokens.</li>
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
</ul>
      `,
      topnTags: 'Top-N Tags',
      tags: 'Tags',
      addTag: 'Add tag',
      useGraphRag: 'Extract knowledge graph',
      useGraphRagTip:
<<<<<<< HEAD
        'After files being chunked, all the chunks will be used for knowlege graph generation which helps inference of multi-hop and complex problems a lot.',
      graphRagMethod: 'Method',
      graphRagMethodTip: `Light: the entity and relation extraction prompt is from GitHub - HKUDS/LightRAG: "LightRAG: Simple and Fast Retrieval-Augmented Generation"</br>
        General: the entity and relation extraction prompt is from GitHub - microsoft/graphrag: A modular graph-based Retrieval-Augmented Generation (RAG) system`,
      resolution: 'Entity resolution',
      resolutionTip: `The resolution procedure would merge entities with the same meaning together which allows the graph conciser and more accurate. Entities as following should be merged:  President Trump, Donald Trump, Donald J. Trump, Donald John Trump`,
      community: 'Community reports generation',
      communityTip:
        'Chunks are clustered into hierarchical communities with entities and relationships connecting each segment up through higher levels of abstraction. We then use an LLM to generate a summary of each community, known as a community report. More: https://www.microsoft.com/en-us/research/blog/graphrag-improving-global-search-via-dynamic-community-selection/',
=======
        'Construct a knowledge graph over extracted file chunks to enhance multi-hop question answering.',
      graphRagMethod: 'Method',
      graphRagMethodTip: `Light: (Default) Use prompts provided by github.com/HKUDS/LightRAG to extract entities and relationships. This option consumes fewer tokens, less memory, and fewer computational resources.</br>
        General: Use prompts provided by github.com/microsoft/graphrag to extract entities and relationships`,
      resolution: 'Entity resolution',
      resolutionTip: `An entity deduplication switch. When enabled, the LLM will combine similar entities - e.g., '2025' and 'the year of 2025', or 'IT' and 'Information Technology' - to construct a more accurate graph`,
      community: 'Community reports generation',
      communityTip:
        'In a knowledge graph, a community is a cluster of entities linked by relationships. You can have the LLM generate an abstract for each community, known as a community report. See here for more information: https://www.microsoft.com/en-us/research/blog/graphrag-improving-global-search-via-dynamic-community-selection/',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    },
    chunk: {
      chunk: 'Chunk',
      bulk: 'Bulk',
      selectAll: 'Select All',
      enabledSelected: 'Enable selected',
      disabledSelected: 'Disable selected',
      deleteSelected: 'Delete selected',
      search: 'Search',
      all: 'All',
      enabled: 'Enabled',
      disabled: 'Disabled',
      keyword: 'Keyword',
      function: 'Function',
      chunkMessage: 'Please input value!',
      full: 'Full text',
      ellipse: 'Ellipse',
      graph: 'Knowledge graph',
      mind: 'Mind map',
      question: 'Question',
<<<<<<< HEAD
      questionTip: `If there're given questions, the embedding of the chunk will be based on them.`,
=======
      questionTip: `If there are given questions, the embedding of the chunk will be based on them.`,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    },
    chat: {
      newConversation: 'New conversation',
      createAssistant: 'Create an Assistant',
      assistantSetting: 'Assistant Setting',
      promptEngine: 'Prompt Engine',
      modelSetting: 'Model Setting',
      chat: 'Chat',
      newChat: 'New chat',
      send: 'Send',
      sendPlaceholder: 'Message the assistant...',
      chatConfiguration: 'Chat Configuration',
      chatConfigurationDescription:
        ' Set up a chat assistant dedicated to your selected knowledge bases here! 💕',
      assistantName: 'Assistant name',
      assistantNameMessage: 'Assistant name is required',
      namePlaceholder: 'e.g. Resume Jarvis',
      assistantAvatar: 'Assistant avatar',
      language: 'Language',
      emptyResponse: 'Empty response',
      emptyResponseTip: `Set this as a response if no results are retrieved from the knowledge bases for your query, or leave this field blank to allow the LLM to improvise when nothing is found.`,
<<<<<<< HEAD
=======
      emptyResponseMessage: `Empty response will be triggered when nothing relevant is retrieved from knowledge bases. You must clear the 'Empty response' field if no knowledge base is selected.`,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      setAnOpener: 'Opening greeting',
      setAnOpenerInitial: `Hi! I'm your assistant, what can I do for you?`,
      setAnOpenerTip: 'Set an opening greeting for users.',
      knowledgeBases: 'Knowledge bases',
      knowledgeBasesMessage: 'Please select',
      knowledgeBasesTip:
        'Select the knowledge bases to associate with this chat assistant.',
      system: 'System',
      systemInitialValue: `You are an intelligent assistant. Please summarize the content of the knowledge base to answer the question. Please list the data in the knowledge base and answer in detail. When all knowledge base content is irrelevant to the question, your answer must include the sentence "The answer you are looking for is not found in the knowledge base!" Answers need to consider chat history.
      Here is the knowledge base:
      {knowledge}
      The above is the knowledge base.`,
      systemMessage: 'Please input!',
      systemTip:
        'Your prompts or instructions for the LLM, including but not limited to its role, the desired length, tone, and language of its answers.',
      topN: 'Top N',
      topNTip: `Not all chunks with similarity score above the 'similarity threshold' will be sent to the LLM. This selects 'Top N' chunks from the retrieved ones.`,
      variable: 'Variable',
      variableTip: `Variables can assist in developing more flexible strategies, particularly when you are using our chat assistant management APIs. These variables will be used by 'System' as part of the prompts for the LLM. The variable {knowledge} is a reserved special variable representing your selected knowledge base(s), and all variables should be enclosed in curly braces {}.`,
      add: 'Add',
      key: 'Key',
      optional: 'Optional',
      operation: 'Operation',
      model: 'Model',
      modelTip: 'Large language chat model',
      modelMessage: 'Please select!',
      freedom: 'Freedom',
      improvise: 'Improvise',
      precise: 'Precise',
      balance: 'Balance',
      freedomTip: `A shortcut to 'Temperature', 'Top P', 'Presence penalty', and 'Frequency penalty' settings, indicating the freedom level of the model. This parameter has three options: Select 'Improvise' to produce more creative responses; select 'Precise' (default) to produce more conservative responses; 'Balance' is a middle ground between 'Improvise' and 'Precise'.`,
      temperature: 'Temperature',
      temperatureMessage: 'Temperature is required',
      temperatureTip: `This parameter controls the randomness of the model's predictions. A lower temperature results in more conservative responses, while a higher temperature yields more creative and diverse responses.`,
      topP: 'Top P',
      topPMessage: 'Top P is required',
      topPTip:
        'Also known as "nucleus sampling", this parameter sets a threshold for selecting a smaller set of the most likely words to sample from, cutting off the less probable ones.',
      presencePenalty: 'Presence penalty',
      presencePenaltyMessage: 'Presence penalty is required',
      presencePenaltyTip:
        'This discourages the model from repeating the same information by penalizing words that have already appeared in the conversation.',
      frequencyPenalty: 'Frequency penalty',
      frequencyPenaltyMessage: 'Frequency penalty is required',
      frequencyPenaltyTip:
        'Similar to the presence penalty, this reduces the model’s tendency to repeat the same words frequently.',
      maxTokens: 'Max tokens',
      maxTokensMessage: 'Max tokens is required',
      maxTokensTip: `This sets the maximum length of the model's output, measured in the number of tokens (words or pieces of words). Defaults to 512. If disabled, you lift the maximum token limit, allowing the model to determine the number of tokens in its responses.`,
      maxTokensInvalidMessage: 'Please enter a valid number for Max Tokens.',
      maxTokensMinMessage: 'Max Tokens cannot be less than 0.',
      quote: 'Show quote',
      quoteTip: 'Whether to display the original text as a reference.',
      selfRag: 'Self-RAG',
      selfRagTip: 'Please refer to: https://huggingface.co/papers/2310.11511',
      overview: 'Chat ID',
      pv: 'Number of messages',
      uv: 'Active user number',
      speed: 'Token output speed',
      tokens: 'Consume the token number',
      round: 'Session Interaction Number',
      thumbUp: 'customer satisfaction',
      preview: 'Preview',
      embedded: 'Embedded',
      serviceApiEndpoint: 'Service API Endpoint',
      apiKey: 'API KEY',
      apiReference: 'API Documents',
      dateRange: 'Date Range:',
      backendServiceApi: 'API Server',
      createNewKey: 'Create new key',
      created: 'Created',
      action: 'Action',
      embedModalTitle: 'Embed into webpage',
      comingSoon: 'Coming soon',
      fullScreenTitle: 'Full Embed',
      fullScreenDescription:
        'Embed the following iframe into your website at the desired location',
      partialTitle: 'Partial Embed',
      extensionTitle: 'Chrome Extension',
      tokenError: 'Please create API key first.',
      betaError:
        'Please acquire a RAGFlow API key from the System Settings page first.',
      searching: 'Searching...',
      parsing: 'Parsing',
      uploading: 'Uploading',
      uploadFailed: 'Upload failed',
      regenerate: 'Regenerate',
      read: 'Read content',
      tts: 'Text to speech',
      ttsTip:
        'Ensure you select a TTS model on the Settings page before enabling this toggle to play text as audio.',
      relatedQuestion: 'Related question',
      answerTitle: 'R',
      multiTurn: 'Multi-turn optimization',
      multiTurnTip:
        'This optimizes user queries using context in a multi-round conversation. When enabled, it will consume additional LLM tokens.',
      howUseId: 'How to use chat ID?',
      description: 'Description of assistant',
<<<<<<< HEAD
=======
      descriptionPlaceholder: 'e.g. A chat assistant for resume.',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      useKnowledgeGraph: 'Use knowledge graph',
      useKnowledgeGraphTip:
        'It will retrieve descriptions of relevant entities,relations and community reports, which will enhance inference of multi-hop and complex question.',
      keyword: 'Keyword analysis',
<<<<<<< HEAD
      keywordTip: `Apply LLM to analyze user's questions, extract keywords which will be emphesize during the relevance omputation.`,
=======
      keywordTip: `Apply LLM to analyze user's questions, extract keywords which will be emphasize during the relevance computation.`,
      languageTip:
        'Allows sentence rewriting with the specified language or defaults to the latest question if not selected.',
      avatarHidden: 'Hide avatar',
      locale: 'Locale',
      selectLanguage: 'Select a language',
      reasoning: 'Reasoning',
      reasoningTip:
        'It will trigger reasoning process like Deepseek-R1/OpenAI o1. Integrates an agentic search process into the reasoning workflow, allowing models itself to dynamically retrieve external knowledge whenever they encounter uncertain information.',
      tavilyApiKeyTip:
        'If an API key is correctly set here, Tavily-based web searches will be used to supplement knowledge base retrieval.',
      tavilyApiKeyMessage: 'Please enter your Tavily API Key',
      tavilyApiKeyHelp: 'How to get it?',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    },
    setting: {
      profile: 'Profile',
      profileDescription: 'Update your photo and personal details here.',
      maxTokens: 'Max Tokens',
      maxTokensMessage: 'Max Tokens is required',
      maxTokensTip: `This sets the maximum length of the model's output, measured in the number of tokens (words or pieces of words). Defaults to 512. If disabled, you lift the maximum token limit, allowing the model to determine the number of tokens in its responses.`,
      maxTokensInvalidMessage: 'Please enter a valid number for Max Tokens.',
      maxTokensMinMessage: 'Max Tokens cannot be less than 0.',
      password: 'Password',
      passwordDescription:
        'Please enter your current password to change your password.',
      model: 'Model providers',
      modelDescription: 'Set the model parameter and API KEY here.',
      team: 'Team',
      system: 'System',
      logout: 'Log out',
      api: 'API',
      username: 'Username',
      usernameMessage: 'Please input your username!',
      photo: 'Your photo',
      photoDescription: 'This will be displayed on your profile.',
      colorSchema: 'Color schema',
      colorSchemaMessage: 'Please select your color schema!',
      colorSchemaPlaceholder: 'select your color schema',
      bright: 'Bright',
      dark: 'Dark',
      timezone: 'Time zone',
      timezoneMessage: 'Please input your timezone!',
      timezonePlaceholder: 'select your timezone',
      email: 'Email address',
      emailDescription: 'Once registered, E-mail cannot be changed.',
      currentPassword: 'Current password',
      currentPasswordMessage: 'Please input your password!',
      newPassword: 'New password',
      newPasswordMessage: 'Please input your password!',
      newPasswordDescription:
        'Your new password must be more than 8 characters.',
      confirmPassword: 'Confirm new password',
      confirmPasswordMessage: 'Please confirm your password!',
      confirmPasswordNonMatchMessage:
        'The new password that you entered do not match!',
      cancel: 'Cancel',
      addedModels: 'Added models',
      modelsToBeAdded: 'Models to be added',
      addTheModel: 'Add the model',
      apiKey: 'API-Key',
      apiKeyMessage:
        'Please enter the API key (for locally deployed model,ignore this).',
      apiKeyTip:
        'The API key can be obtained by registering the corresponding LLM supplier.',
      showMoreModels: 'Show more models',
      baseUrl: 'Base-Url',
      baseUrlTip:
        'If your API key is from OpenAI, just ignore it. Any other intermediate providers will give this base url with the API key.',
      modify: 'Modify',
      systemModelSettings: 'System Model Settings',
      chatModel: 'Chat model',
      chatModelTip:
        'The default chat LLM all the newly created knowledgebase will use.',
      embeddingModel: 'Embedding model',
      embeddingModelTip:
        'The default embedding model all the newly created knowledgebase will use.',
      img2txtModel: 'Img2txt model',
      img2txtModelTip:
        'The default multi-module model all the newly created knowledgebase will use. It can describe a picture or video.',
      sequence2txtModel: 'Sequence2txt model',
      sequence2txtModelTip:
        'The default ASR model all the newly created knowledgebase will use. Use this model to translate voices to corresponding text.',
      rerankModel: 'Rerank model',
      rerankModelTip: `The default rerank model is used to rerank chunks retrieved by users' questions.`,
      ttsModel: 'TTS Model',
      ttsModelTip:
        'The default TTS model will be used to generate speech during conversations upon request.',
      workspace: 'Workspace',
      upgrade: 'Upgrade',
      addLlmTitle: 'Add LLM',
      modelName: 'Model name',
      modelID: 'Model ID',
      modelUid: 'Model UID',
      modelNameMessage: 'Please input your model name!',
      modelType: 'Model type',
      modelTypeMessage: 'Please input your model type!',
      addLlmBaseUrl: 'Base url',
      baseUrlNameMessage: 'Please input your base url!',
      vision: 'Does it support Vision?',
      ollamaLink: 'How to integrate {{name}}',
      FishAudioLink: 'How to use FishAudio',
      TencentCloudLink: 'How to use TencentCloud ASR',
      volcModelNameMessage: 'Please input your model name!',
      addEndpointID: 'EndpointID of the model',
      endpointIDMessage: 'Please input your EndpointID of the model',
      addArkApiKey: 'VOLC ARK_API_KEY',
      ArkApiKeyMessage: 'Please input your ARK_API_KEY',
      bedrockModelNameMessage: 'Please input your model name!',
      addBedrockEngineAK: 'ACCESS KEY',
      bedrockAKMessage: 'Please input your ACCESS KEY',
      addBedrockSK: 'SECRET KEY',
      bedrockSKMessage: 'Please input your SECRET KEY',
      bedrockRegion: 'AWS Region',
      bedrockRegionMessage: 'Please select!',
      'us-east-1': 'US East (N. Virginia)',
      'us-west-2': 'US West (Oregon)',
      'ap-southeast-1': 'Asia Pacific (Singapore)',
      'ap-northeast-1': 'Asia Pacific (Tokyo)',
      'eu-central-1': 'Europe (Frankfurt)',
      'us-gov-west-1': 'AWS GovCloud (US-West)',
      'ap-southeast-2': 'Asia Pacific (Sydney)',
      addHunyuanSID: 'Hunyuan Secret ID',
      HunyuanSIDMessage: 'Please input your Secret ID',
      addHunyuanSK: 'Hunyuan Secret Key',
      HunyuanSKMessage: 'Please input your Secret Key',
      addTencentCloudSID: 'TencentCloud Secret ID',
      TencentCloudSIDMessage: 'Please input your Secret ID',
      addTencentCloudSK: 'TencentCloud Secret Key',
      TencentCloudSKMessage: 'Please input your Secret Key',
      SparkModelNameMessage: 'Please select Spark model',
      addSparkAPIPassword: 'Spark APIPassword',
      SparkAPIPasswordMessage: 'please input your APIPassword',
      addSparkAPPID: 'Spark APP ID',
      SparkAPPIDMessage: 'please input your APP ID',
      addSparkAPISecret: 'Spark APISecret',
      SparkAPISecretMessage: 'please input your APISecret',
      addSparkAPIKey: 'Spark APIKey',
      SparkAPIKeyMessage: 'please input your APIKey',
      yiyanModelNameMessage: 'Please input model name',
      addyiyanAK: 'yiyan API KEY',
      yiyanAKMessage: 'Please input your API KEY',
      addyiyanSK: 'yiyan Secret KEY',
      yiyanSKMessage: 'Please input your Secret KEY',
      FishAudioModelNameMessage:
        'Please give your speech synthesis model a name',
      addFishAudioAK: 'Fish Audio API KEY',
      addFishAudioAKMessage: 'Please input your API KEY',
      addFishAudioRefID: 'FishAudio Reference ID',
      addFishAudioRefIDMessage:
        'Please input the Reference ID (leave blank to use the default model).',
      GoogleModelIDMessage: 'Please input your model ID!',
      addGoogleProjectID: 'Project ID',
      GoogleProjectIDMessage: 'Please input your Project ID',
      addGoogleServiceAccountKey:
        'Service Account Key(Leave blank if you use Application Default Credentials)',
      GoogleServiceAccountKeyMessage:
        'Please input Google Cloud Service Account Key in base64 format',
      addGoogleRegion: 'Google Cloud Region',
      GoogleRegionMessage: 'Please input Google Cloud Region',
      modelProvidersWarn: `Please add both embedding model and LLM in <b>Settings > Model providers</b>  firstly. Then, set them in 'System model settings'.`,
      apiVersion: 'API-Version',
      apiVersionMessage: 'Please input API version',
      add: 'Add',
      updateDate: 'Update Date',
      role: 'Role',
      invite: 'Invite',
      agree: 'Accept',
      refuse: 'Decline',
      teamMembers: 'Team Members',
      joinedTeams: 'Joined Teams',
      sureDelete: 'Are you sure to remove this member?',
      quit: 'Quit',
      sureQuit: 'Are you sure you want to quit the team you joined?',
    },
    message: {
      registered: 'Registered!',
      logout: 'logout',
      logged: 'logged!',
      pleaseSelectChunk: 'Please select chunk!',
      modified: 'Modified',
      created: 'Created',
      deleted: 'Deleted',
      renamed: 'Renamed',
      operated: 'Operated',
      updated: 'Updated',
      uploaded: 'Uploaded',
      200: 'The server successfully returns the requested data.',
      201: 'Create or modify data successfully.',
      202: 'A request has been queued in the background (asynchronous task).',
      204: 'Data deleted successfully.',
      400: 'There was an error in the request issued, and the server did not create or modify data.',
<<<<<<< HEAD
      401: 'The user does not have permissions (wrong token, username, password).',
=======
      401: 'Please sign in again.',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      403: 'The user is authorized, but access is prohibited.',
      404: 'The request was made for a record that does not exist, and the server did not perform the operation.',
      406: 'The requested format is not available.',
      410: 'The requested resource has been permanently deleted and will not be available again.',
      413: 'The total size of the files uploaded at once is too large.',
      422: 'When creating an object, a validation error occurred.',
      500: 'A server error occurred, please check the server.',
      502: 'Gateway error.',
      503: 'The service is unavailable and the server is temporarily overloaded or undergoing maintenance.',
      504: 'Gateway timeout.',
      requestError: 'Request error',
      networkAnomalyDescription:
        'There is an abnormality in your network and you cannot connect to the server.',
      networkAnomaly: 'network anomaly',
      hint: 'hint',
    },
    fileManager: {
      name: 'Name',
      uploadDate: 'Upload Date',
      knowledgeBase: 'Knowledge Base',
      size: 'Size',
      action: 'Action',
      addToKnowledge: 'Link to Knowledge Base',
      pleaseSelect: 'Please select',
      newFolder: 'New Folder',
      file: 'File',
      uploadFile: 'Upload File',
<<<<<<< HEAD
      directory: 'Directory',
      uploadTitle: 'Click or drag file to this area to upload',
      uploadDescription:
        'Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.',
=======
      parseOnCreation: 'Parse on creation',
      directory: 'Directory',
      uploadTitle: 'Drag and drop your file here to upload',
      uploadDescription:
        'Supports single or bulk file upload. Files must not exceed 10MB each, with a maximum of 128 files.',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      local: 'Local uploads',
      s3: 'S3 uploads',
      preview: 'Preview',
      fileError: 'File error',
      uploadLimit:
<<<<<<< HEAD
        'The file size cannot exceed 10M, and the total number of files cannot exceed 128',
=======
        'Each file must not exceed 10MB, and the total number of files must not exceed 128.',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      destinationFolder: 'Destination folder',
    },
    flow: {
      cite: 'Cite',
      citeTip: 'citeTip',
      name: 'Name',
      nameMessage: 'Please input name',
      description: 'Description',
      examples: 'Examples',
      to: 'To',
      msg: 'Messages',
      messagePlaceholder: 'message',
      messageMsg: 'Please input message or delete this field.',
      addField: 'Add option',
      addMessage: 'Add message',
      loop: 'Loop',
      loopTip:
        'Loop is the upper limit of the number of loops of the current component, when the number of loops exceeds the value of loop, it means that the component can not complete the current task, please re-optimize agent',
      yes: 'Yes',
      no: 'No',
      key: 'Key',
      componentId: 'Component ID',
      add: 'Add',
      operation: 'operation',
      run: 'Run',
      save: 'Save',
      title: 'ID:',
      beginDescription: 'This is where the flow begins.',
      answerDescription: `A component that serves as the interface between human and bot, receiving user inputs and displaying the agent's responses.`,
      retrievalDescription: `A component that retrieves information from specified knowledge bases (datasets). Ensure that the knowledge bases you select use the same embedding model.`,
      generateDescription: `A component that prompts the LLM to generate responses. Ensure the prompt is set correctly.`,
      categorizeDescription: `A component that uses the LLM to classify user inputs into predefined categories. Ensure you specify the name, description, and examples for each category, along with the corresponding next component.`,
      relevantDescription: `A component that uses the LLM to assess whether the upstream output is relevant to the user's latest query. Ensure you specify the next component for each judge result.`,
      rewriteQuestionDescription: `A component that rewrites a user query from the Interact component, based on the context of previous dialogues.`,
      messageDescription:
        "A component that sends out a static message. If multiple messages are supplied, it randomly selects one to send. Ensure its downstream is 'Interact', the interface component.",
      keywordDescription: `A component that retrieves top N search results from user's input. Ensure the TopN value is set properly before use.`,
      switchDescription: `A component that evaluates conditions based on the output of previous components and directs the flow of execution accordingly. It allows for complex branching logic by defining cases and specifying actions for each case or default action if no conditions are met.`,
      wikipediaDescription: `A component that searches from wikipedia.org, using TopN to specify the number of search results. It supplements the existing knowledge bases.`,
      promptText: `Please summarize the following paragraphs. Be careful with the numbers, do not make things up. Paragraphs as following:
        {input}
  The above is the content you need to summarize.`,
      createGraph: 'Create agent',
      createFromTemplates: 'Create from templates',
      retrieval: 'Retrieval',
      generate: 'Generate',
      answer: 'Interact',
      categorize: 'Categorize',
      relevant: 'Relevant',
      rewriteQuestion: 'Rewrite',
      rewrite: 'Rewrite',
      begin: 'Begin',
      message: 'Message',
      blank: 'Blank',
      createFromNothing: 'Create your agent from scratch',
      addItem: 'Add Item',
      addSubItem: 'Add Sub Item',
      nameRequiredMsg: 'Name is required',
      nameRepeatedMsg: 'The name cannot be repeated',
      keywordExtract: 'Keyword',
      keywordExtractDescription: `A component that extracts keywords from a user query, with Top N specifying the number of keywords to extract.`,
      baidu: 'Baidu',
      baiduDescription: `A component that searches from baidu.com, using TopN to specify the number of search results. It supplements the existing knowledge bases.`,
      duckDuckGo: 'DuckDuckGo',
      duckDuckGoDescription:
        'A component that searches from duckduckgo.com, allowing you to specify the number of search results using TopN. It supplements the existing knowledge bases.',
      channel: 'Channel',
      channelTip: `Perform text search or news search on the component's input`,
      text: 'Text',
      news: 'News',
      messageHistoryWindowSize: 'Message window size',
      messageHistoryWindowSizeTip:
        'The  window size of conversation history that needed to be seen by LLM. The larger the better. But be careful with the maximum content length of LLM.',
      wikipedia: 'Wikipedia',
      pubMed: 'PubMed',
      pubMedDescription:
        'A component that searches from https://pubmed.ncbi.nlm.nih.gov/, allowing you to specify the number of search results using TopN. It supplements the existing knowledge bases.',
      email: 'Email',
      emailTip:
        'E-mail is a required field. You must input an E-mail address here.',
      arXiv: 'ArXiv',
      arXivDescription:
        'A component that searches from https://arxiv.org/, allowing you to specify the number of search results using TopN. It supplements the existing knowledge bases.',
      sortBy: 'Sort by',
      submittedDate: 'Submitted date',
      lastUpdatedDate: 'Last updated date',
      relevance: 'Relevance',
      google: 'Google',
      googleDescription:
        'A component that searches from https://www.google.com/, allowing you to specify the number of search results using TopN. It supplements the existing knowledge bases. Please note that this requires an API key from serpapi.com.',
      bing: 'Bing',
      bingDescription:
        'A component that searches from https://www.bing.com/, allowing you to specify the number of search results using TopN. It supplements the existing knowledge bases. Please note that this requires an API key from microsoft.com.',
      apiKey: 'API KEY',
<<<<<<< HEAD
      country: 'Country&Region',
=======
      country: 'Country & Region',
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
      language: 'Language',
      googleScholar: 'Google Scholar',
      googleScholarDescription:
        'A component that searches https://scholar.google.com/. You can use Top N to specify the number of search results.',
      yearLow: 'Year low',
      yearHigh: 'Year high',
      patents: 'Patents',
      data: 'Data',
      deepL: 'DeepL',
      deepLDescription:
        'A component that gets more specialized translations from https://www.deepl.com/.',
      authKey: 'Auth key',
      sourceLang: 'Source language',
      targetLang: 'Target language',
      gitHub: 'GitHub',
      gitHubDescription:
        'A component that searches for repositories from https://github.com/. You can use Top N to specify the number of search results.',
      baiduFanyi: 'BaiduFanyi',
      baiduFanyiDescription:
        'A component that gets specialized translations from https://fanyi.baidu.com/.',
      appid: 'App ID',
      secretKey: 'Secret key',
      domain: 'Domain',
      transType: 'Translation type',
      baiduSecretKeyOptions: {
        translate: 'General translation',
        fieldtranslate: 'Field translation',
      },
      baiduDomainOptions: {
        it: 'Information technology',
        finance: 'Financial and economics',
        machinery: 'Machinery manufacturing',
        senimed: 'Biomedicine',
        novel: 'Online literature',
        academic: 'Academic paper',
        aerospace: 'Aerospace',
        wiki: 'Humanities and social sciences',
        news: 'News and information',
        law: 'Laws and regulations',
        contract: 'Contract',
      },
      baiduSourceLangOptions: {
        auto: 'Auto detect',
        zh: 'Chinese',
        en: 'English',
        yue: 'Cantonese',
        wyw: 'Classical Chinese',
        jp: 'Japanese',
        kor: 'Korean',
        fra: 'French',
        spa: 'Spanish',
        th: 'Thai',
        ara: 'Arabic',
        ru: 'Russian',
        pt: 'Portuguese',
        de: 'German',
        it: 'Italian',
        el: 'Greek',
        nl: 'Dutch',
        pl: 'Polish',
        bul: 'Bulgarian',
        est: 'Estonian',
        dan: 'Danish',
        fin: 'Finnish',
        cs: 'Czech',
        rom: 'Romanian',
        slo: 'Slovenian',
        swe: 'Swedish',
        hu: 'Hungarian',
        cht: 'Traditional Chinese',
        vie: 'Vietnamese',
      },
      qWeather: 'QWeather',
      qWeatherDescription:
        'A component that retrieves weather information, such as temperature and air quality, from https://www.qweather.com/.',
      lang: 'Language',
      type: 'Type',
      webApiKey: 'Web API key',
      userType: 'User type',
      timePeriod: 'Time period',
      qWeatherLangOptions: {
        zh: 'Simplified Chinese',
        'zh-hant': 'Traditional Chinese',
        en: 'English',
        de: 'German',
        es: 'Spanish',
        fr: 'French',
        it: 'Italian',
        ja: 'Japanese',
        ko: 'Korean',
        ru: 'Russian',
        hi: 'Hindi',
        th: 'Thai',
        ar: 'Arabic',
        pt: 'Portuguese',
        bn: 'Bengali',
        ms: 'Malay',
        nl: 'Dutch',
        el: 'Greek',
        la: 'Latin',
        sv: 'Swedish',
        id: 'Indonesian',
        pl: 'Polish',
        tr: 'Turkish',
        cs: 'Czech',
        et: 'Estonian',
        vi: 'Vietnamese',
        fil: 'Filipino',
        fi: 'Finnish',
        he: 'Hebrew',
        is: 'Icelandic',
        nb: 'Norwegian',
      },
      qWeatherTypeOptions: {
        weather: 'Weather forecast',
        indices: 'Weather life index',
        airquality: 'Air quality',
      },
      qWeatherUserTypeOptions: {
        free: 'Free subscriber',
        paid: 'Paid subscriber',
      },
      qWeatherTimePeriodOptions: {
        now: 'Now',
        '3d': '3 days',
        '7d': '7 days',
        '10d': '10 days',
        '15d': '12 days',
        '30d': '30 days',
      },
      publish: 'API',
      exeSQL: 'ExeSQL',
      exeSQLDescription:
        'A component that performs SQL queries on a relational database, supporting querying from MySQL, PostgreSQL, or MariaDB.',
      dbType: 'Database Type',
      database: 'Database',
      username: 'Username',
      host: 'Host',
      port: 'Port',
      password: 'Password',
      switch: 'Switch',
      logicalOperator: 'Logical operator',
      switchOperatorOptions: {
        equal: 'Equals',
        notEqual: 'Not equal',
        gt: 'Greater than',
        ge: 'Greater equal',
        lt: 'Less than',
        le: 'Less equal',
        contains: 'Contains',
        notContains: 'Not contains',
        startWith: 'Starts with',
        endWith: 'Ends with',
        empty: 'Is empty',
        notEmpty: 'Not empty',
      },
      switchLogicOperatorOptions: {
        and: 'AND',
        or: 'OR',
      },
      operator: 'Operator',
      value: 'Value',
      useTemplate: 'Use this template',
      wenCai: 'WenCai',
      queryType: 'Query type',
      wenCaiDescription:
        'A component that obtains financial information, including stock prices and funding news, from a wide range of financial websites.',
      wenCaiQueryTypeOptions: {
        stock: 'stock',
        zhishu: 'index',
        fund: 'fund',
        hkstock: 'Hong Kong shares',
        usstock: 'US stock market',
        threeboard: 'New OTC Market',
        conbond: 'Convertible Bond',
        insurance: 'insurance',
        futures: 'futures',
        lccp: 'Financing',
        foreign_exchange: 'Foreign currency',
      },
      akShare: 'AkShare',
      akShareDescription:
        'A component that obtains news about stocks from https://www.eastmoney.com/.',
      yahooFinance: 'YahooFinance',
      yahooFinanceDescription:
        'A component that queries information about a publicly traded company using its ticker symbol.',
      crawler: 'Web Crawler',
      crawlerDescription:
        'A component that crawls HTML source code from a specified URL.',
      proxy: 'Proxy',
      crawlerResultOptions: {
        html: 'Html',
        markdown: 'Markdown',
        content: 'Content',
      },
      extractType: 'Extract type',
      info: 'Info',
      history: 'History',
      financials: 'Financials',
      balanceSheet: 'Balance sheet',
      cashFlowStatement: 'Cash flow statement',
      jin10: 'Jin10',
      jin10Description:
        'A component that retrieves financial information from the Jin10 Open Platform, including news updates, calendars, quotes, and references.',
      flashType: 'Flash type',
      filter: 'Filter',
      contain: 'Contain',
      calendarType: 'Calendar type',
      calendarDatashape: 'Calendar datashape',
      symbolsDatatype: 'Symbols datatype',
      symbolsType: 'Symbols type',
      jin10TypeOptions: {
        flash: 'Quick News',
        calendar: 'Calendar',
        symbols: 'quotes',
        news: 'reference',
      },
      jin10FlashTypeOptions: {
        '1': 'Market News',
        '2': ' Futures News',
        '3': 'US-Hong Kong News',
        '4': 'A-Share News',
        '5': 'Commodities & Forex News',
      },
      jin10CalendarTypeOptions: {
        cj: 'Macroeconomic Data Calendar',
        qh: ' Futures Calendar',
        hk: 'Hong Kong Stock Market Calendar',
        us: 'US Stock Market Calendar',
      },
      jin10CalendarDatashapeOptions: {
        data: 'Data',
        event: ' Event',
        holiday: 'Holiday',
      },
      jin10SymbolsTypeOptions: {
        GOODS: 'Commodity Quotes',
        FOREX: ' Forex Quotes',
        FUTURE: 'International Market Quotes',
        CRYPTO: 'Cryptocurrency Quotes',
      },
      jin10SymbolsDatatypeOptions: {
        symbols: 'Commodity List',
        quotes: ' Latest Market Quotes',
      },
      concentrator: 'Concentrator',
      concentratorDescription:
        'A component that receives the output from the upstream component and passes it on as input to the downstream components.',
      tuShare: 'TuShare',
      tuShareDescription:
        'A component that obtains financial news briefs from mainstream financial websites, aiding industry and quantitative research.',
      tuShareSrcOptions: {
        sina: 'Sina',
        wallstreetcn: 'wallstreetcn',
        '10jqka': 'Straight flush',
        eastmoney: 'Eastmoney',
        yuncaijing: 'YUNCAIJING',
        fenghuang: 'FENGHUANG',
        jinrongjie: 'JRJ',
      },
      token: 'Token',
      src: 'Source',
      startDate: 'Start date',
      endDate: 'End date',
      keyword: 'Keyword',
      note: 'Note',
      noteDescription: 'Note',
      notePlaceholder: 'Please enter a note',
      invoke: 'Invoke',
      invokeDescription: `A component capable of calling remote services, using other components' outputs or constants as inputs.`,
      url: 'Url',
      method: 'Method',
      timeout: 'Timeout',
      headers: 'Headers',
      cleanHtml: 'Clean HTML',
      cleanHtmlTip:
        'If the response is HTML formatted and only the primary content wanted, please toggle it on.',
      reference: 'Reference',
      input: 'Input',
      output: 'Output',
      parameter: 'Parameter',
      howUseId: 'How to use agent ID?',
      content: 'Content',
      operationResults: 'Operation Results',
      autosaved: 'Autosaved',
      optional: 'Optional',
      pasteFileLink: 'Paste file link',
      testRun: 'Test Run',
      template: 'Template',
      templateDescription:
        'A component that formats the output of other components.1. Supports Jinja2 templates, will first convert the input to an object and then render the template, 2. Simultaneously retains the original method of using {parameter} string replacement',
      emailComponent: 'Email',
      emailDescription: 'Send an email to a specified address.',
      smtpServer: 'SMTP Server',
      smtpPort: 'SMTP Port',
      senderEmail: 'Sender Email',
      authCode: 'Authorization Code',
      senderName: 'Sender Name',
      toEmail: 'Recipient Email',
      ccEmail: 'CC Email',
      emailSubject: 'Subject',
      emailContent: 'Content',
      smtpServerRequired: 'Please input SMTP server address',
      senderEmailRequired: 'Please input sender email',
      authCodeRequired: 'Please input authorization code',
      toEmailRequired: 'Please input recipient email',
      emailContentRequired: 'Please input email content',
      emailSentSuccess: 'Email sent successfully',
      emailSentFailed: 'Failed to send email',
      dynamicParameters: 'Dynamic Parameters',
      jsonFormatTip:
        'Upstream component should provide JSON string in following format:',
      toEmailTip: 'to_email: Recipient email (Required)',
      ccEmailTip: 'cc_email: CC email (Optional)',
      subjectTip: 'subject: Email subject (Optional)',
      contentTip: 'content: Email content (Optional)',
      jsonUploadTypeErrorMessage: 'Please upload json file',
      jsonUploadContentErrorMessage: 'json file error',
      iteration: 'Iteration',
      iterationDescription: `This component firstly split the input into array by "delimiter".
Perform the same operation steps on the elements in the array in sequence until all results are output, which can be understood as a task batch processor.

For example, within the long text translation iteration node, if all content is input to the LLM node, the single conversation limit may be reached. The upstream node can first split the long text into multiple fragments, and cooperate with the iterative node to perform batch translation on each fragment to avoid reaching the LLM message limit for a single conversation.`,
      delimiterTip: `
This delimiter is used to split the input text into several text pieces echo of which will be performed as input item of each iteration.`,
      delimiterOptions: {
        comma: 'Comma',
        lineBreak: 'Line break',
        tab: 'Tab',
        underline: 'Underline',
        diagonal: 'Forward slash',
        minus: 'Dash',
        semicolon: 'Semicolon',
      },
      addVariable: 'Add variable',
      variableSettings: 'Variable settings',
      globalVariables: 'Global variables',
      systemPrompt: 'System prompt',
      addCategory: 'Add category',
      categoryName: 'Category name',
      nextStep: 'Next step',
<<<<<<< HEAD
=======
      datatype: 'MINE type of the HTTP request',
      insertVariableTip: `Enter / Insert variables`,
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
    },
    footer: {
      profile: 'All rights reserved @ React',
    },
    layout: {
      file: 'file',
      knowledge: 'knowledge',
      chat: 'chat',
    },
  },
};

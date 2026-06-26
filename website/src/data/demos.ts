import type { RootWidget } from '@termuijs/core'
import {
    // display
    Badge,
    BigText,
    Text,
    LogView,
    JSONView,
    DiffView,
    StreamingText,
    ChatMessage,
    ChatThread,
    ToolCall,
    ToolApproval,
    FPSCounter,
    PerformanceOverlay,
    ThinkingBlock,
    DirectoryTree,
    UnorderedList,
    OrderedList,
    NotificationBadge,
    ShortcutBar,
    Tree,
    Markdown,
    Code,
    QRCode,
    QRCodePattern,
    Breadcrumbs,
    Tag,
    Canvas,
    Highlight,
    Digits,
    Accordion,
    Rule,
    Carousel,
    Stopwatch,
    Avatar,
    Tooltip,
    Clock,
    Gradient,
    Collapsible,
    Kbd,
    Timer,
    Watermark,
    Typewriter,
    Timeline,
    Stepper,
    Marquee,
    Link,
    Placeholder,
    // feedback
    Alert,
    Banner,
    Spinner,
    LoadingDots,
    ProgressBar,
    ProgressCircle,
    MultiProgress,
    TaskList,
    StatusMessage,
    EmptyState,
    Scrollbar,
    Callout,
    Progress,
    Skeleton,
    // data
    StatusIndicator,
    Gauge,
    Sparkline,
    BarChart,
    LineChart,
    KeyValue,
    Table,
    BulletChart,
    Hexdump,
    TreeTable,
    RadarChart,
    Definition,
    DataGrid,
    Stat,
    Calendar,
    CandlestickChart,
    AreaChart,
    StackedBarChart,
    Histogram,
    PieChart,
    GanttChart,
    ScatterPlot,
    HeatMap,
    Sidebar,
    LineGauge,
    // input
    TextInput,
    List,
    CommandPalette,
    Button,
    Checkbox,
    Slider,
    ContextMenu,
    Knob,
    PinInput,
    VirtualList,
    RangeInput,
    // layout
    Card,
    Stack,
    Panel,
    ScrollView,
    Columns,
    AspectRatio,
    Dock,
    Center,
    Divider,
    SplitPane,
    Fill,
    Masonry,
    Grid,
} from '@termuijs/widgets'

const demos: Record<string, () => RootWidget> = {
    // ── Display ───────────────────────────────────────

    'badge': () => new Badge('v0.1.7', {}, { variant: 'success' }),

    'big-text': () => new BigText('TERMUI', {}, { color: { type: 'named', name: 'cyan' } }),

    'text': () => new Text('The quick brown fox jumps over the lazy dog. TermUI renders text with word-wrap, alignment, and smooth scrolling.', {}, { wrap: true }),

    'log-view': () => {
        const w = new LogView({}, { autoScroll: true })
        w.setLines([
            '[12:00:01] INFO  Server started on port 3000',
            '[12:00:02] INFO  Connected to database',
            '[12:00:04] WARN  Memory usage above 80%',
            '[12:00:05] ERROR Failed to reach upstream API',
            '[12:00:06] DEBUG Retrying in 5 seconds…',
            '[12:00:11] INFO  Retry successful',
            '[12:00:15] INFO  Request GET /api/users 200 42ms',
        ])
        return w
    },

    'json-view': () => new JSONView({
        data: {
            name: 'Claude',
            version: 3,
            capabilities: ['text', 'code', 'vision'],
            config: { temperature: 0.7, maxTokens: 4096, stream: true },
        },
    }),

    'diff-view': () => new DiffView({
        lines: [
            { type: 'context', content: 'function greet(name: string) {', lineNo: 1 },
            { type: 'remove',  content: '  return "Hello, " + name;',     lineNo: 2 },
            { type: 'add',     content: '  return `Hello, ${name}!`;',    lineNo: 2 },
            { type: 'context', content: '}',                               lineNo: 3 },
            { type: 'context', content: '',                                lineNo: 4 },
            { type: 'remove',  content: 'const msg = greet("World");',    lineNo: 5 },
            { type: 'add',     content: 'const msg = greet("TermUI");',   lineNo: 5 },
        ],
        showLineNumbers: true,
    }),

    'streaming-text': () => new StreamingText({
        text: 'TermUI streams AI responses token by token with a blinking cursor, giving your CLI apps the feel of a real-time chat interface.',
        speed: 0,
    }),

    'chat-message': () => new ChatMessage({
        role: 'assistant',
        content: 'I can help you build beautiful terminal UIs with TermUI. What would you like to create?',
        timestamp: new Date('2026-06-25T12:00:00'),
    }),

    'chat-thread': () => new ChatThread({}, [
        { role: 'user',      content: 'What is TermUI?' },
        { role: 'assistant', content: 'TermUI is a framework for building rich terminal UIs in TypeScript.' },
        { role: 'user',      content: 'Does it support widgets?' },
        { role: 'assistant', content: 'Yes — over 60 widgets including charts, inputs, and AI-native components.' },
    ]),

    'tool-call': () => new ToolCall({
        name: 'read_file',
        args: { path: '/src/index.ts', encoding: 'utf-8' },
        status: 'done',
        result: '// TermUI entry point',
        collapsed: false,
    }),

    'tool-approval': () => new ToolApproval({
        name: 'exec',
        args: { command: 'rm -rf ./dist', cwd: '/project' },
        status: 'pending',
        collapsed: false,
    }),

    'f-p-s-counter': () => {
        const w = new FPSCounter({}, { showAverage: true, showMinMax: true })
        w.updateFPS(58)
        w.updateFPS(60)
        w.updateFPS(59)
        w.updateFPS(61)
        return w
    },

    'performance-overlay': () => {
        const w = new PerformanceOverlay()
        w.updateStats({ cellsChanged: 142, bytesWritten: 1024, durationMs: 2.4 })
        return w
    },

    'thinking-block': () => {
        const w = new ThinkingBlock({
            thinking: 'Let me reason through this step by step. First I need to consider the time complexity of the algorithm, then the space usage…',
        })
        return w
    },

    'directory-tree': () => new DirectoryTree({
        tree: [
            { name: 'packages', type: 'dir', children: [
                { name: 'core',    type: 'dir', children: [
                    { name: 'src',       type: 'dir', children: [] },
                    { name: 'package.json', type: 'file' },
                ]},
                { name: 'widgets', type: 'dir', children: [
                    { name: 'src',       type: 'dir', children: [] },
                    { name: 'package.json', type: 'file' },
                ]},
            ]},
            { name: 'website',   type: 'dir', children: [] },
            { name: 'README.md', type: 'file' },
        ],
    }),

    'unordered-list': () => new UnorderedList([
        { text: 'Install dependencies' },
        { text: 'Configure widgets', children: [
            { text: 'Set up theme' },
            { text: 'Configure layout' },
        ]},
        { text: 'Run the app' },
        { text: 'Deploy to production' },
    ]),

    'ordered-list': () => new OrderedList([
        { text: 'Clone the repository' },
        { text: 'Install packages', children: [
            { text: 'npm install' },
            { text: 'npm run build' },
        ]},
        { text: 'Start development server' },
        { text: 'Open localhost:3000' },
    ]),

    'notification-badge': () => new NotificationBadge(
        { count: 7, position: 'top-right' },
    ),

    'shortcut-bar': () => new ShortcutBar([
        { key: 'F1',   label: 'Help' },
        { key: 'F3',   label: 'Search' },
        { key: 'F5',   label: 'Refresh' },
        { key: 'F10',  label: 'Menu' },
        { key: 'q',    label: 'Quit' },
    ]),

    'tree': () => new Tree({
        nodes: [
            { label: 'Documents', children: [
                { label: 'Resume.pdf' },
                { label: 'Projects', children: [
                    { label: 'termui.md' },
                    { label: 'roadmap.md' },
                ]},
            ], expanded: true },
            { label: 'Downloads', children: [
                { label: 'archive.zip' },
            ]},
        ],
    }),

    'markdown': () => new Markdown({ content: `# TermUI

**Build** terminal UIs with _ease_.

- 60+ widgets
- TypeScript native
- \`xterm.js\` renderer

> Ship fast. Look good.
` }),

    'code': () => new Code(
        `function fibonacci(n: number): number {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}`,
        {},
        { language: 'typescript', showLineNumbers: true },
    ),

    'q-r-code': () => new QRCode('https://termuijs.dev', {}),

    'q-r-code-pattern': () => new QRCodePattern(
        'https://termuijs.dev',
        {},
        { showText: true },
    ),

    // ── Feedback ──────────────────────────────────────

    'alert': () => new Alert({ variant: 'info', message: 'Component loaded successfully' }),

    'banner': () => new Banner({}, {
        variant: 'warning',
        title: 'Deprecation Notice',
        body: 'This API will be removed in v2.0. Please migrate to the new widget API.',
    }),

    'spinner': () => new Spinner({}, { label: 'Loading components…' }),

    'loading-dots': () => new LoadingDots({}, { label: 'Connecting to server', maxDots: 3 }),

    'progress-bar': () => new ProgressBar({}, { value: 0.68, showLabel: true, labelFormat: 'percent' }),

    'progress-circle': () => new ProgressCircle({}, { value: 72, label: '72%' }),

    'multi-progress': () => new MultiProgress({
        items: [
            { label: 'CPU',    value: 0.74, color: { type: 'named', name: 'red' } },
            { label: 'Memory', value: 0.51, color: { type: 'named', name: 'yellow' } },
            { label: 'Disk',   value: 0.28, color: { type: 'named', name: 'green' } },
            { label: 'Network',value: 0.09, color: { type: 'named', name: 'cyan' } },
        ],
        labelWidth: 9,
        showValues: true,
    }),

    'task-list': () => new TaskList(
        {},
        {
            pendingText:  '○ waiting',
            runningText:  '● running',
            doneText:     '✓ done',
            errorText:    '✗ failed',
        },
        [
            { id: 1, label: 'Install deps',   status: 'done' },
            { id: 2, label: 'Type check',     status: 'done' },
            { id: 3, label: 'Run tests',      status: 'running' },
            { id: 4, label: 'Build bundle',   status: 'pending' },
            { id: 5, label: 'Deploy to CDN',  status: 'pending' },
        ],
    ),

    'status-message': () => new StatusMessage(
        'All systems operational',
        {},
        { variant: 'success' },
    ),

    'empty-state': () => new EmptyState(
        'No results found',
        {},
        {
            description: 'Try adjusting your search or filters',
            hint: 'Press / to search',
        },
    ),

    // ── Data ─────────────────────────────────────────

    'status-indicator': () => new StatusIndicator('API Server', true),

    'gauge': () => {
        const w = new Gauge('CPU', {}, { showLabel: true })
        w.setValue(0.65)
        return w
    },

    'sparkline': () => {
        const w = new Sparkline('Latency', {}, { showRange: true })
        w.setData([12, 18, 14, 22, 19, 30, 25, 16, 12, 20, 28, 15, 10, 14, 18])
        return w
    },

    'bar-chart': () => new BarChart([
        { bars: [{ value: 42, label: 'Mon' }] },
        { bars: [{ value: 58, label: 'Tue' }] },
        { bars: [{ value: 35, label: 'Wed' }] },
        { bars: [{ value: 71, label: 'Thu' }] },
        { bars: [{ value: 63, label: 'Fri' }] },
    ], {}, { direction: 'vertical' }),

    'line-chart': () => {
        const w = new LineChart(
            [10, 25, 18, 42, 35, 58, 47, 63, 55, 72, 68, 80],
            {},
            { showYAxis: false, color: { type: 'named', name: 'cyan' } },
        )
        return w
    },

    'key-value': () => new KeyValue([
        { key: 'Version',    value: '0.1.7' },
        { key: 'Runtime',    value: 'Node 22' },
        { key: 'Renderer',   value: 'xterm.js' },
        { key: 'Widgets',    value: 60 },
        { key: 'License',    value: 'MIT' },
    ]),

    'table': () => new Table(
        [
            { header: 'Package',  key: 'pkg',     width: 14 },
            { header: 'Version',  key: 'version', width: 10 },
            { header: 'Size',     key: 'size',    width: 8 },
            { header: 'License',  key: 'license', width: 8 },
        ],
        [
            { pkg: '@termuijs/core',    version: '0.1.7', size: '42 kB', license: 'MIT' },
            { pkg: '@termuijs/widgets', version: '0.1.7', size: '98 kB', license: 'MIT' },
            { pkg: '@termuijs/motion',  version: '0.1.7', size: '12 kB', license: 'MIT' },
            { pkg: '@termuijs/ui',      version: '0.1.7', size: '55 kB', license: 'MIT' },
        ],
        {},
        { showHeader: true, stripe: true },
    ),

    // ── Input ─────────────────────────────────────────

    'text-input': () => new TextInput({}, { placeholder: 'Type something…' }),

    'list': () => new List([
        { label: 'New file',       value: 'new-file' },
        { label: 'Open folder',    value: 'open-folder' },
        { label: 'Recent files',   value: 'recent' },
        { label: 'Settings',       value: 'settings' },
        { label: 'Quit',           value: 'quit' },
    ]),

    'command-palette': () => new CommandPalette({
        commands: [
            { id: 'open',  label: 'Open File',       description: 'Ctrl+O', action: () => {} },
            { id: 'save',  label: 'Save',             description: 'Ctrl+S', action: () => {} },
            { id: 'find',  label: 'Find in Files',    description: 'Ctrl+F', action: () => {} },
            { id: 'term',  label: 'New Terminal',     description: 'Ctrl+`', action: () => {} },
            { id: 'debug', label: 'Start Debugging',  description: 'F5',     action: () => {} },
            { id: 'quit',  label: 'Quit',             description: 'Ctrl+Q', action: () => {} },
        ],
        placeholder: 'Search commands…',
        maxVisible: 6,
    }),

    'button': () => new Button('Deploy to Production', {}, { variant: 'primary' }),

    'checkbox': () => new Checkbox(
        'Enable dark mode',
        {},
        { checked: true },
    ),

    'slider': () => new Slider('Volume', {}, { min: 0, max: 100, step: 5, showValue: true }),

    // ── Layout ───────────────────────────────────────

    'card': () => {
        const c = new Card({}, { title: 'System Status', borderColor: { type: 'named', name: 'cyan' } })
        c.addChild(new StatusMessage('All services running', {}, { variant: 'success' }))
        return c
    },

    'stack': () => {
        const base = new Text('Base layer', { fg: { type: 'named', name: 'brightBlack' } })
        const top  = new Text('Top layer (overlaid)', { fg: { type: 'named', name: 'white' } })
        return new Stack([base, top])
    },

    // ── Display (new) ────────────────────────────────

    'breadcrumbs': () => new Breadcrumbs(
        ['Home', 'Docs', 'Widgets', 'Breadcrumbs'],
        {},
        { separator: '❯' },
    ),

    'tag': () => new Tag('typescript', {}, { variant: 'info' }),

    'canvas': () => {
        const w = new Canvas({})
        // Draw a simple X pattern using setPixel; pixels are set after mount
        return w
    },

    'highlight': () => new Highlight(
        'TermUI is a powerful terminal UI framework for TypeScript',
        'terminal',
    ),

    'digits': () => {
        const w = new Digits({ height: 3 }, { color: { type: 'named', name: 'cyan' } })
        w.setValue('42:07')
        return w
    },

    'accordion': () => new Accordion(
        [
            { title: 'Installation',  content: 'npm install @termuijs/widgets\nnpm install @termuijs/core' },
            { title: 'Configuration', content: 'Import widgets and mount them to a Screen instance.' },
            { title: 'Usage',         content: 'const w = new Text("hello");\nscreen.setRoot(w);' },
        ],
        {},
        { openIndex: 0 },
    ),

    'j-s-o-n-view': () => new JSONView({ data: { name: 'Claude', version: 3 } }),

    'rule': () => new Rule({}, { title: 'Section Break', orientation: 'horizontal' }),

    'carousel': () => new Carousel(
        [
            '  Slide 1: Build terminal UIs effortlessly',
            '  Slide 2: 60+ widgets out of the box',
            '  Slide 3: TypeScript native, zero config',
        ],
        { showDots: true },
    ),

    'stopwatch': () => {
        const w = new Stopwatch({}, {})
        // Leave at 00:00.00 — no timer running in static preview
        return w
    },

    'avatar': () => new Avatar('Karanjot Singh', {}, { shape: 'square' }),

    'tooltip': () => new Tooltip(
        { text: 'Press F1 for help', visible: true },
        {},
    ),

    'clock': () => new Clock({}, { showSeconds: true, use24Hour: true }),

    'gradient': () => new Gradient(
        'TermUI — build beautiful terminal UIs',
        {},
        { startColor: '#ff6b6b', endColor: '#4ecdc4' },
    ),

    'collapsible': () => new Collapsible(
        'Advanced Options',
        'theme: dark\nfont-size: 14\nline-height: 1.5\ntab-size: 2',
        {},
        { open: true },
    ),

    'kbd': () => new Kbd('Ctrl+Shift+P'),

    'timer': () => {
        const w = new Timer({ duration: 5 * 60 * 1000 }, {})
        // Shows 05:00 in static preview
        return w
    },

    'watermark': () => new Watermark(
        'CONFIDENTIAL',
        {},
        { color: { type: 'named', name: 'brightBlack' }, angle: 45 },
    ),

    'typewriter': () => {
        const w = new Typewriter(
            'TermUI reveals text character by character — perfect for onboarding flows.',
            {},
            { speed: 2 },
        )
        // Reveal first 30 chars for the static preview
        for (let i = 0; i < 30; i++) w.tick()
        return w
    },

    'timeline': () => new Timeline([
        { title: 'Project kickoff',   time: 'Jan 2026', status: 'done'    },
        { title: 'Alpha release',     time: 'Mar 2026', status: 'done'    },
        { title: 'Beta release',      time: 'May 2026', status: 'active'  },
        { title: 'General availability', time: 'Jul 2026', status: 'pending' },
    ]),

    'stepper': () => new Stepper(
        [
            { label: 'Setup',   status: 'completed' },
            { label: 'Config',  status: 'active'    },
            { label: 'Review',  status: 'pending'   },
            { label: 'Deploy',  status: 'pending'   },
        ],
        {},
        { orientation: 'horizontal' },
    ),

    'marquee': () => new Marquee(
        'TermUI · 60+ widgets · TypeScript native · xterm.js renderer · ship fast',
        {},
        { speed: 1, gap: 6 },
    ),

    'link': () => new Link(
        'Visit termuijs.dev',
        {},
        { url: 'https://termuijs.dev', showUrlFallback: false },
    ),

    'placeholder': () => new Placeholder(
        'Widget Area',
        { height: 8 },
        { borderColor: { type: 'named', name: 'brightBlack' } },
    ),

    // ── Feedback (new) ───────────────────────────────

    'scrollbar': () => new Scrollbar(
        { height: 12 },
        { contentLength: 100, viewportLength: 12, position: 20, orientation: 'verticalRight' },
    ),

    'callout': () => new Callout(
        'Your API key expires in 3 days. Please rotate it to avoid disruption.',
        {},
        { variant: 'warn', title: 'Action Required' },
    ),

    'progress': () => {
        const w = new Progress(
            {
                tasks: [
                    { label: 'Uploading assets',    value: 1.0, status: 'done'    },
                    { label: 'Compiling bundles',   value: 0.72, status: 'running' },
                    { label: 'Running tests',       value: 0.0,  status: 'pending' },
                ],
            },
        )
        return w
    },

    'skeleton': () => new Skeleton({ height: 5 }, { variant: 'pulse', shape: 'card' }),

    // ── Input (new) ──────────────────────────────────

    'context-menu': () => new ContextMenu(
        [
            { label: 'Cut',        value: 'cut'    },
            { label: 'Copy',       value: 'copy'   },
            { label: 'Paste',      value: 'paste'  },
            { label: 'Delete',     value: 'delete', disabled: true },
            { label: 'Select All', value: 'select-all' },
        ],
        2,
        2,
    ),

    'knob': () => {
        const w = new Knob('Volume', {}, { min: 0, max: 100, step: 5, showValue: true })
        w.setValue(65)
        return w
    },

    'pin-input': () => new PinInput({}, { length: 6, masked: false }),

    'virtual-list': () => new VirtualList({
        totalItems: 10_000,
        itemHeight: 1,
        renderItem: (i) => `  Item #${String(i + 1).padStart(5, '0')}  —  row data goes here`,
    }),

    'range-input': () => {
        const w = new RangeInput('Price Range', {}, { min: 0, max: 1000, step: 10, showValue: true })
        w.setLow(200)
        w.setHigh(750)
        return w
    },

    // ── Layout (new) ─────────────────────────────────

    'panel': () => {
        const p = new Panel({}, { title: 'Server Metrics', borderColor: { type: 'named', name: 'cyan' } })
        p.addChild(new Text('Uptime: 99.98%  |  Requests: 1.2M  |  Errors: 0.02%'))
        return p
    },

    'scroll-view': () => {
        const w = new ScrollView({ height: 6 }, { contentHeight: 20, showScrollbar: true })
        for (let i = 1; i <= 12; i++) {
            w.addChild(new Text(`Line ${i}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`))
        }
        return w
    },

    'columns': () => {
        const c = new Columns()
        c.addChild(new Text('Left column content'))
        c.addChild(new Text('Center column content'))
        c.addChild(new Text('Right column content'))
        return c
    },

    'aspect-ratio': () => new AspectRatio(
        new Text('16:9 content area'),
        {},
        { ratio: 16 / 9 },
    ),

    'dock': () => {
        const header = new Text('Header', { fg: { type: 'named', name: 'cyan' } })
        const footer = new Text('Footer', { fg: { type: 'named', name: 'brightBlack' } })
        const main   = new Text('Main content area')
        return new Dock([
            { widget: header, edge: 'top',  size: 1 },
            { widget: footer, edge: 'bottom', size: 1 },
            { widget: main,   edge: 'fill' },
        ])
    },

    'center': () => {
        const w = new Center()
        w.addChild(new Text('Centered!', { fg: { type: 'named', name: 'cyan' } }))
        return w
    },

    'divider': () => new Divider({}, { orientation: 'horizontal', label: 'Stats' }),

    'split-pane': () => new SplitPane(
        new Text('Left pane: file explorer or sidebar content'),
        new Text('Right pane: main editor or preview area'),
        {},
        { ratio: 0.35, direction: 'horizontal' },
    ),

    'fill': () => new Fill(
        { height: 4 },
        { char: '·', color: { type: 'named', name: 'brightBlack' } },
    ),

    'masonry': () => {
        const items = [
            new Text('Card A\nShort content.', { height: 2 }),
            new Text('Card B\nThis card has\nmore content.', { height: 3 }),
            new Text('Card C\nTwo lines\nhere too.', { height: 3 }),
            new Text('Card D\nJust one line.', { height: 2 }),
        ]
        return new Masonry(items, {}, { columns: 2, gap: 1 })
    },

    'grid': () => {
        const g = new Grid({}, { columns: 3, rows: 2, gap: 1 })
        g.addItem(new Text('A'))
        g.addItem(new Text('B'))
        g.addItem(new Text('C'))
        g.addItem(new Text('D'))
        g.addItem(new Text('E'))
        g.addItem(new Text('F'))
        return g
    },

    // ── Data (new) ───────────────────────────────────

    'bullet-chart': () => {
        const w = new BulletChart(
            {},
            {
                max: 100,
                label: 'Revenue',
                ranges: [
                    { to: 40,  color: { type: 'named', name: 'red'    } },
                    { to: 70,  color: { type: 'named', name: 'yellow' } },
                    { to: 100, color: { type: 'named', name: 'green'  } },
                ],
            },
        )
        w.setValue(65)
        w.setTarget(80)
        return w
    },

    'hexdump': () => {
        const data = new Uint8Array([
            0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x54,
            0x65, 0x72, 0x6d, 0x55, 0x49, 0x21, 0x0a, 0x00,
            0xde, 0xad, 0xbe, 0xef, 0xca, 0xfe, 0xba, 0xbe,
            0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
        ])
        return new Hexdump(data, {}, { bytesPerRow: 16 })
    },

    'tree-table': () => new TreeTable(
        [
            { header: 'Name',    key: 'name',    width: 20 },
            { header: 'Type',    key: 'type',    width: 8  },
            { header: 'Size',    key: 'size',    width: 10 },
        ],
        [
            { name: 'packages', type: 'dir',  size: '—', expanded: true, children: [
                { name: 'core',    type: 'dir',  size: '—', children: [
                    { name: 'index.ts', type: 'file', size: '12 kB' },
                ]},
                { name: 'widgets', type: 'dir',  size: '—', children: [
                    { name: 'index.ts', type: 'file', size: '98 kB' },
                ]},
            ]},
            { name: 'README.md', type: 'file', size: '4 kB' },
        ],
        {},
        { showHeader: true, stripe: true },
    ),

    'radar-chart': () => {
        const w = new RadarChart(
            {},
            { axes: ['Speed', 'Power', 'Accuracy', 'Ease', 'Cost'] },
        )
        w.setSeries([
            {
                label: 'TermUI',
                values: [0.9, 0.7, 0.95, 0.85, 0.8],
                color: { type: 'named', name: 'cyan' },
            },
        ])
        return w
    },

    'definition': () => new Definition(
        [
            { term: 'Widget',    definition: 'A reusable UI component that renders to a terminal screen.' },
            { term: 'Screen',    definition: 'The virtual buffer that maps to the terminal output.' },
            { term: 'Renderer',  definition: 'Writes the screen buffer diff to stdout via xterm.js.' },
        ],
        {},
        { spacing: true, termColor: { type: 'named', name: 'cyan' } },
    ),

    'data-grid': () => new DataGrid(
        [
            { header: 'Name',    key: 'name',    width: 14, sortable: true },
            { header: 'Version', key: 'version', width: 10, sortable: true },
            { header: 'License', key: 'license', width: 8  },
        ],
        [
            { name: '@termuijs/core',    version: '0.1.7', license: 'MIT' },
            { name: '@termuijs/widgets', version: '0.1.7', license: 'MIT' },
            { name: '@termuijs/motion',  version: '0.1.7', license: 'MIT' },
        ],
        {},
        { showHeader: true },
    ),

    'stat': () => {
        const w = new Stat(
            'Monthly Revenue',
            '$48,320',
            {},
            { delta: 1, valueColor: { type: 'named', name: 'green' } },
        )
        return w
    },

    'calendar': () => new Calendar(
        {},
        { date: new Date('2026-06-26') },
    ),

    'candlestick-chart': () => {
        const w = new CandlestickChart(
            {},
            { upColor: { type: 'named', name: 'green' }, downColor: { type: 'named', name: 'red' } },
        )
        w.setData([
            { open: 100, high: 115, low: 95,  close: 110 },
            { open: 110, high: 120, low: 105, close: 108 },
            { open: 108, high: 118, low: 100, close: 115 },
            { open: 115, high: 125, low: 112, close: 120 },
            { open: 120, high: 128, low: 108, close: 112 },
            { open: 112, high: 122, low: 109, close: 119 },
            { open: 119, high: 130, low: 116, close: 127 },
            { open: 127, high: 135, low: 120, close: 122 },
        ])
        return w
    },

    'area-chart': () => {
        const w = new AreaChart(
            {},
            { lineColor: { type: 'named', name: 'cyan' }, fillColor: { type: 'named', name: 'brightBlack' }, showLine: true },
        )
        w.setData([10, 25, 18, 42, 35, 58, 47, 63, 55, 72, 68, 80, 75, 88, 92])
        return w
    },

    'stacked-bar-chart': () => {
        const w = new StackedBarChart(
            {},
            { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
        )
        w.setSeries([
            { label: 'Frontend', data: [30, 40, 35, 50, 45], color: { type: 'named', name: 'cyan'   } },
            { label: 'Backend',  data: [20, 25, 30, 20, 35], color: { type: 'named', name: 'green'  } },
            { label: 'Infra',    data: [10, 10, 15, 12, 10], color: { type: 'named', name: 'yellow' } },
        ])
        return w
    },

    'histogram': () => {
        const w = new Histogram(
            {},
            { bins: 8, barColor: { type: 'named', name: 'cyan' }, xLabel: 'Response Time (ms)' },
        )
        w.setData([12, 45, 23, 67, 34, 89, 12, 56, 78, 34, 23, 45, 67, 89, 12, 34,
                   56, 23, 78, 45, 67, 12, 89, 34, 56, 23, 45, 78, 12, 67])
        return w
    },

    'pie-chart': () => new PieChart({
        slices: [
            { label: 'TypeScript', value: 62, color: '#3178c6' },
            { label: 'JavaScript', value: 22, color: '#f7df1e' },
            { label: 'CSS',        value: 10, color: '#264de4' },
            { label: 'Other',      value: 6,  color: '#888888' },
        ],
        showLegend: true,
    }),

    'gantt-chart': () => new GanttChart(
        [
            { label: 'Design',   start: 0,  duration: 3 },
            { label: 'Develop',  start: 2,  duration: 6, color: { type: 'named', name: 'cyan'  } },
            { label: 'Test',     start: 7,  duration: 3, color: { type: 'named', name: 'green' } },
            { label: 'Deploy',   start: 9,  duration: 2, color: { type: 'named', name: 'yellow'} },
        ],
        {},
        { minTime: 0, maxTime: 12 },
    ),

    'scatter-plot': () => {
        const w = new ScatterPlot(
            {},
            { xLabel: 'Latency (ms)', yLabel: 'Throughput', pointColor: { type: 'named', name: 'cyan' } },
        )
        w.setData([
            { x: 12, y: 80 }, { x: 25, y: 65 }, { x: 8,  y: 90 },
            { x: 40, y: 40 }, { x: 18, y: 75 }, { x: 55, y: 30 },
            { x: 30, y: 55 }, { x: 62, y: 20 }, { x: 5,  y: 95 },
            { x: 48, y: 35 }, { x: 35, y: 50 }, { x: 22, y: 70 },
        ])
        return w
    },

    'heat-map': () => new HeatMap(
        [
            [0.1, 0.3, 0.6, 0.8, 0.5],
            [0.4, 0.7, 0.9, 0.6, 0.3],
            [0.8, 0.5, 0.4, 0.9, 0.7],
            [0.2, 0.6, 0.7, 0.4, 1.0],
            [0.6, 0.2, 0.5, 0.7, 0.4],
        ],
        {},
        {
            rowLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            colLabels: ['00h', '06h', '12h', '18h', '23h'],
        },
    ),

    'sidebar': () => new Sidebar(
        [
            { label: 'Dashboard',  badge: '3',  active: true  },
            { label: 'Widgets',    badge: '60'              },
            { label: 'Docs',                                 },
            { label: 'Settings',                             },
            { label: 'Logout',                               },
        ],
        {},
        { activeColor: { type: 'named', name: 'cyan' } },
    ),

    'line-gauge': () => {
        const w = new LineGauge({}, { showLabel: true, fillColor: { type: 'named', name: 'cyan' } })
        w.setValue(0.73)
        return w
    },
}

export default demos

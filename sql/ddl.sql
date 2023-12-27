create table if not exists chats
(
    id         uuid      default uuid_generate_v4() not null
        primary key,
    name       varchar(255),
    created_at timestamp default CURRENT_TIMESTAMP
);

alter table chats
    owner to postgres;

create table if not exists users
(
    id         uuid      default uuid_generate_v4() not null
        primary key,
    name       varchar(255)                         not null,
    email      varchar(255)                         not null,
    password   varchar(255)                         not null,
    created_at timestamp default CURRENT_TIMESTAMP
);

alter table users
    owner to postgres;

create table if not exists messages
(
    id         uuid      default uuid_generate_v4() not null
        primary key,
    created_at timestamp default CURRENT_TIMESTAMP,
    content    text                                 not null,
    user_id    uuid
        references users
            on delete cascade,
    chat_id    uuid
        references chats
            on delete cascade,
    status     varchar(255)                         not null
);

alter table messages
    owner to postgres;

create table if not exists users_chats
(
    user_id uuid not null
        constraint user_chats_user_id_fkey
            references users
            on delete cascade,
    chat_id uuid not null
        constraint user_chats_chat_id_fkey
            references chats
            on delete cascade,
    constraint user_chats_pkey
        primary key (user_id, chat_id)
);

alter table users_chats
    owner to postgres;

create or replace function uuid_nil() returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_nil() owner to postgres;

create or replace function uuid_ns_dns() returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_ns_dns() owner to postgres;

create or replace function uuid_ns_url() returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_ns_url() owner to postgres;

create or replace function uuid_ns_oid() returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_ns_oid() owner to postgres;

create or replace function uuid_ns_x500() returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_ns_x500() owner to postgres;

create or replace function uuid_generate_v1() returns uuid
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_generate_v1() owner to postgres;

create or replace function uuid_generate_v1mc() returns uuid
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_generate_v1mc() owner to postgres;

create or replace function uuid_generate_v3(namespace uuid, name text) returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_generate_v3(uuid, text) owner to postgres;

create or replace function uuid_generate_v4() returns uuid
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_generate_v4() owner to postgres;

create or replace function uuid_generate_v5(namespace uuid, name text) returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_generate_v5(uuid, text) owner to postgres;

